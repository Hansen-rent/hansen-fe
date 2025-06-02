import { defineStore } from "pinia";
import { useModal } from "vue-final-modal";
import { defineAsyncComponent } from "vue";
import modalsMap from "~/maps/modalsMap.json";

export const useModalStore = defineStore("modalStore", {
  state: () => ({
    modalsList: modalsMap,
    modals: {},
    openingModals: [],
  }),

  actions: {
    accessToOpen(modalName) {
      const { isLoggedIn } = useProfileStore();
      if (this.modalsList[modalName]?.onlyGuest) return !isLoggedIn;
      if (this.modalsList[modalName]?.onlyLogged) return isLoggedIn;
      return true;
    },

    async addModalQuery(modalName, modalQueryParam) {
      const router = useRouter();
      const { query } = useRoute();
      const newQuery = { ...query };

      Object.keys(this.modals).forEach((modalName) => {
        const modalListQueryName = this.modalsList[modalName]?.queryName;
        if (
          modalListQueryName &&
          this.modals[modalName]?.options?.modelValue &&
          query.hasOwnProperty(modalListQueryName)
        ) {
          this.modals[modalName].close();
          delete newQuery[modalListQueryName];
        }
      });

      await router.replace({
        query: {
          ...newQuery,
          [this.modalsList[modalName]?.queryName]: modalQueryParam || "true",
        },
      });
    },

    async removeModalQuery(modalName) {
      const modalListQueryName = this.modalsList[modalName]?.queryName;
      if (!modalListQueryName) return;

      const router = useRouter();
      const { query } = useRoute();
      const newQuery = { ...query, [modalListQueryName]: undefined };
      if (modalName === "reset-pass") newQuery.resetCode = undefined;
      await router.replace({ query: newQuery });
    },

    async openModal(modalName, params) {
      if (
        !this.modalsList[modalName] ||
        !this.accessToOpen(modalName) ||
        this.openingModals.includes(modalName)
      )
        return;
      this.openingModals.push(modalName);

      if (!this.modals[modalName]) {
        const modalComponentName = this.modalsList[modalName].component;
        const modalComponent = defineAsyncComponent(async () => {
          try {
            return await import(
              `../../components/modal/${modalComponentName}.vue`
            );
          } catch {
            return import(`../components/modal/${modalComponentName}.vue`);
          }
        });

        if (this.modalsList[modalName].content) {
          const contentParams = {
            contentKey: `modal-${modalName}`,
            contentRoute: ["modals", this.modalsList[modalName].content],
          };
          const { getContentData } = useContentLogic(contentParams);
          const { currentLocaleData, defaultLocaleData } =
            await getContentData();

          this.modals[modalName] = useModal({
            component: modalComponent,
            attrs: {
              currentLocaleData,
              defaultLocaleData,
              ...params?.props,
            },
          });
        } else {
          this.modals[modalName] = useModal({
            component: modalComponent,
            attrs: { ...params?.props },
          });
        }
      } else if (params?.props) {
        const currentModalOptions = this.modals[modalName].options;
        const newOptions = {
          ...currentModalOptions,
          attrs: { ...currentModalOptions.attrs, ...params.props },
        };
        this.modals[modalName].patchOptions(newOptions);
      }

      if (
        (params?.prohibitQueryChange ?? true) &&
        this.modalsList[modalName].queryName
      )
        await this.addModalQuery(modalName, params?.modalQueryValue);
      this.modals[modalName].open();
      this.openingModals = this.openingModals.filter(
        (item) => item !== modalName
      );
    },

    async closeModal(modalName) {
      this.modals[modalName]?.close();
      if (this.modalsList[modalName].queryName)
        await this.removeModalQuery(modalName);
    },

    async closeAllModals() {
      // CAN'T USE "vfm.closeAll()" BECAUSE OF SKELETON AND PROJECTS MODALS
      const { query } = useRoute();
      const newQuery = { ...query };
      Object.keys(this.modals).forEach((modalName) => {
        if (this.modals[modalName]?.options?.modelValue) {
          this.modals[modalName].close();
          const modalListQueryName = this.modalsList[modalName]?.queryName;
          if (modalListQueryName && query.hasOwnProperty(modalListQueryName))
            delete newQuery[modalListQueryName];
        }
      });

      const router = useRouter();
      await router.replace({ query: newQuery });
    },

    async checkOpenedModals() {
      const route = useRoute();
      const queryArr = Object.keys(route.query);
      if (!queryArr.length) return;

      const modalsByQuery = {};
      Object.keys(this.modalsList).forEach((modalName) => {
        const modalQueryName = this.modalsList[modalName].queryName;
        if (modalQueryName) modalsByQuery[modalQueryName] = modalName;
      });

      for (const queryName of queryArr) {
        if (!modalsByQuery[queryName]) return;

        if (!this.accessToOpen(modalsByQuery[queryName])) {
          await this.removeModalQuery(modalsByQuery[queryName]);
        } else {
          await this.openModal(modalsByQuery[queryName], {
            modalQueryValue: route.query[queryName],
          });
          break;
        }
      }
    },
  },
});

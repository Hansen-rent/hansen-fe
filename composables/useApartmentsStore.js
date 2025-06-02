import { defineStore } from "pinia";
import api from "@/api/axios";

export const useApartmentsStore = defineStore("apartments", {
  state: () => ({
    dutyTypes: [],
  }),

  actions: {
    async fetchDutyTypes() {
      const { data } = await api.get("/duty-types");
      this.dutyTypes = data.data;
    },
  },
});

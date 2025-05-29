<template>
  <div>
    <!-- <Preloader ref="preloaderRef" /> -->

    <NuxtLayout :name="layout">
      <NuxtPage
        :transition="{ name: 'page-fade', mode: 'out-in', appear: false }"
        @transitionstart="onTransitionStart"
      />
    </NuxtLayout>

    <div class="snackbars" id="form-output-global"></div>
  </div>
</template>

<script setup>
const route = useRoute();
const preloaderRef = ref(null);

const layout = computed(() => {
  return route.meta?.layout ?? "default";
});

const onTransitionStart = () => {
  initParallax();
};

onMounted(() => {
  initParallax();

  setTimeout(() => {
    preloaderRef.value?.$el.classList.add("loaded");
  }, 0);
  // }, 500);
});
</script>

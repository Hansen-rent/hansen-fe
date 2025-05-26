<template>
  <div>
    <Preloader ref="preloaderRef" />
    <NuxtPage />
    <div class="snackbars" id="form-output-global"></div>
  </div>
</template>

<script setup>
const preloaderRef = ref(null);

onMounted(() => {
  setTimeout(() => {
    preloaderRef.value?.$el.classList.add("loaded");
  }, 500);
});
</script>

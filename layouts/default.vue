<template>
  <div>
    <AppNavbar />

    <main>
      <slot />
    </main>

    <AppFooter />

    <ModalsContainer />
  </div>
</template>

<script setup>
import { ModalsContainer } from "vue-final-modal";
</script>

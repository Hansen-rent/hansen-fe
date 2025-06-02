<template>
  <vue-final-modal
    class="wallet-modal"
    :click-to-close="true"
    :overlay-transition="{ mode: 'in-out', duration: 250 }"
    :content-transition="{ mode: 'in-out', duration: 250 }"
  ></vue-final-modal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
</script>

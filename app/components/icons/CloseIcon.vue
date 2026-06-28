<script setup lang="ts">
defineOptions({ inheritAttrs: false });
</script>

<template>
  <svg
    v-bind="$attrs"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</template>

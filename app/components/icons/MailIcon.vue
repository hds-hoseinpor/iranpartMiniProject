<script setup lang="ts">
defineOptions({ inheritAttrs: false });
</script>

<template>
  <svg
    v-bind="$attrs"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      stroke-width="2"
    />
  </svg>
</template>

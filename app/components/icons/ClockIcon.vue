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
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" />
  </svg>
</template>

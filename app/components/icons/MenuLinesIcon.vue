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
      stroke-width="1.5"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
</template>

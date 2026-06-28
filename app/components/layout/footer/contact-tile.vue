<script setup lang="ts">
import type { FooterContactItem } from "@/types/footer";

defineProps<{
  item: FooterContactItem;
}>();
</script>

<template>
  <div class="contact-tile">
    <div class="icon-box" :class="item.iconClass">
      <component :is="item.icon" />
    </div>
    <div>
      <h4 class="mb-1 text-xs font-bold text-gray-400">
        {{ item.label }}
      </h4>
      <p class="text-sm font-black dark:text-white">
        {{ item.value }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FooterLinkGroup } from "@/types/footer";

defineProps<{
  group: FooterLinkGroup;
}>();
</script>

<template>
  <div class="space-y-8">
    <h3 class="footer-title">
      {{ group.title }}
    </h3>
    <ul class="space-y-5">
      <li v-for="link in group.links" :key="link">
        <a href="#" class="footer-link">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

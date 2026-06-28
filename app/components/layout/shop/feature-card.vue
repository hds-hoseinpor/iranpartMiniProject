<script setup lang="ts">
import type { ShopFeature } from "@/types/shop-feature";

defineProps<{
  feature: ShopFeature;
}>();
</script>

<template>
  <div class="group flex flex-col items-center text-center">
    <div class="relative mb-6 flex h-20 w-20 items-center justify-center">
      <div
        class="absolute inset-0 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        :class="feature.glowClass"
      />
      <div
        class="relative z-10 flex h-full w-full items-center justify-center rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
        :class="[feature.borderHoverClass, feature.shadowHoverClass]"
      >
        <component
          :is="feature.icon"
          class="h-9 w-9 text-gray-700 transition-colors dark:text-gray-300"
          :class="feature.iconHoverClass"
        />
      </div>
    </div>
    <h3
      class="mb-2 text-sm font-black text-gray-900 transition-colors dark:text-white"
      :class="feature.titleHoverClass"
    >
      {{ feature.title }}
    </h3>
    <p
      class="max-w-[150px] text-[11px] leading-6 text-gray-500 dark:text-gray-400"
    >
      {{ feature.description }}
    </p>
  </div>
</template>

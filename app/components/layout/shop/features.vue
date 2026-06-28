<script setup lang="ts">
import { SHOP_FEATURES } from "@/constants/shopFeatures";
</script>

<template>
  <section class="relative overflow-hidden transition-colors duration-500">
    <div class="container pt-5">
      <div class="grid grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-8">
        <LayoutShopFeatureCard
          v-for="feature in SHOP_FEATURES"
          :key="feature.title"
          :feature="feature"
        />
      </div>
    </div>
  </section>
</template>

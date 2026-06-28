import type { Component } from "vue";

export interface ShopFeature {
  title: string;
  description: string;
  glowClass: string;
  borderHoverClass: string;
  shadowHoverClass: string;
  titleHoverClass: string;
  iconHoverClass: string;
  icon: Component;
}

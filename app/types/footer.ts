import type { Component } from "vue";

export interface FooterContactItem {
  label: string;
  value: string;
  iconClass: string;
  icon: Component;
}

export interface FooterLinkGroup {
  title: string;
  links: string[];
}

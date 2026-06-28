import BadgeCheckIcon from "@/components/icons/BadgeCheckIcon.vue";
import BoltIcon from "@/components/icons/BoltIcon.vue";
import ReturnBoxIcon from "@/components/icons/ReturnBoxIcon.vue";
import ShieldCheckIcon from "@/components/icons/ShieldCheckIcon.vue";
import type { ShopFeature } from "@/types/shop-feature";

export const SHOP_FEATURES: ShopFeature[] = [
  {
    title: "ارسال فوق سریع",
    description: "تحویل کالا در کمتر از ۲۴ ساعت در سراسر کشور",
    glowClass: "bg-blue-500/10 dark:bg-blue-500/20",
    borderHoverClass: "group-hover:border-blue-500/50",
    shadowHoverClass: "group-hover:shadow-blue-500/10",
    titleHoverClass: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    iconHoverClass: "group-hover:text-blue-500",
    icon: BoltIcon,
  },
  {
    title: "۷ روز ضمانت بازگشت",
    description: "امکان بازگشت کالا در صورت عدم رضایت یا نقص",
    glowClass: "bg-secondary-500/10 dark:bg-secondary-500/20",
    borderHoverClass: "group-hover:border-secondary-500/50",
    shadowHoverClass: "group-hover:shadow-secondary-500/10",
    titleHoverClass:
      "group-hover:text-secondary-600 dark:group-hover:text-secondary-500",
    iconHoverClass: "group-hover:text-secondary-500",
    icon: ReturnBoxIcon,
  },
  {
    title: "پرداخت امن",
    description: "استفاده از پروتکل‌های امن و درگاه‌های معتبر",
    glowClass: "bg-emerald-500/10 dark:bg-emerald-500/20",
    borderHoverClass: "group-hover:border-emerald-500/50",
    shadowHoverClass: "group-hover:shadow-emerald-500/10",
    titleHoverClass:
      "group-hover:text-emerald-600 dark:group-hover:text-emerald-500",
    iconHoverClass: "group-hover:text-emerald-500",
    icon: ShieldCheckIcon,
  },
  {
    title: "ضمانت اصالت",
    description: "تضمین ۱۰۰٪ کالاها با گارانتی معتبر",
    glowClass: "bg-indigo-500/10 dark:bg-indigo-500/20",
    borderHoverClass: "group-hover:border-indigo-500/50",
    shadowHoverClass: "group-hover:shadow-indigo-500/10",
    titleHoverClass:
      "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    iconHoverClass: "group-hover:text-indigo-500",
    icon: BadgeCheckIcon,
  },
];

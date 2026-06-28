import ClockIcon from "@/components/icons/ClockIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import MailIcon from "@/components/icons/MailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import type { FooterContactItem, FooterLinkGroup } from "@/types/footer";

export const FOOTER_CONTACTS: FooterContactItem[] = [
  {
    label: "شماره تماس",
    value: "۰۲۱-۹۱۰۰XXXX",
    iconClass: "bg-blue-500/10 text-blue-600",
    icon: PhoneIcon,
  },
  {
    label: "ساعات پاسخگویی",
    value: "شنبه تا پنجشنبه، ۹ تا ۱۸",
    iconClass: "bg-indigo-500/10 text-indigo-600",
    icon: ClockIcon,
  },
  {
    label: "دفتر مرکزی",
    value: "تهران، سعادت‌آباد، برج راستچین",
    iconClass: "bg-purple-500/10 text-purple-600",
    icon: LocationIcon,
  },
  {
    label: "پشتیبانی ایمیلی",
    value: "Support@Rtltheme.com",
    iconClass: "bg-emerald-500/10 text-emerald-600",
    icon: MailIcon,
  },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "دسترسی سریع",
    links: [
      "گوشی‌های هوشمند",
      "لپ‌تاپ و تبلت",
      "گجت‌های پوشیدنی",
      "لوازم جانبی",
    ],
  },
  {
    title: "راهنمای خرید",
    links: [
      "پیگیری سفارش",
      "شرایط مرجوعی",
      "سوالات متداول",
      "تماس با پشتیبانی",
    ],
  },
];

export const FOOTER_LEGAL_LINKS = [
  "شرایط خدمات",
  "سیاست حفظ حریم خصوصی",
  "کوکی‌ها",
  "امنیت",
];

export const FOOTER_LICENSES = ["Enamad", "Samandehi"];

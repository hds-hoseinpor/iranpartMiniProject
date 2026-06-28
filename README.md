# تیکت‌های پشتیبانی — Nuxt.js

پیاده‌سازی صفحه «تیکت‌های پشتیبانی» پنل کاربری فروشگاه ماناشاپ، بر اساس قالب HTML/Tailwind موجود و با اتصال مستقیم به API.

## پیش‌نیازها

- **Node.js** نسخه ۲۰ یا بالاتر
- **npm** (یا pnpm / yarn)

## نصب و اجرا

```bash
npm install
npm run dev
```

پس از اجرا:

```
http://localhost:3000/
```

مسیر قدیمی `/user-tickets` به `/` ریدایرکت می‌شود.

### سایر دستورات

```bash
npm run build     # ساخت نسخه production
npm run preview   # پیش‌نمایش build
npm run generate  # generate استاتیک
```

## نسخه‌ها

| پکیج           | نسخه              |
| -------------- | ----------------- |
| Nuxt           | ^4.4.8            |
| Vue            | ^3.5.38           |
| VueUse         | ^13.5.0           |
| Tailwind CSS   | ^4.3.1 (Vite)     |

## ساختار پروژه

```
├── app/
│   ├── assets/css/             # Tailwind، base، components، fonts
│   ├── components/
│   │   ├── icons/              # آیکون‌های SVG
│   │   ├── layout/             # هدر، فوتر، سایدبار، nav موبایل، پس‌زمینه
│   │   └── tickets/            # UI لیست تیکت
│   ├── composables/            # useTickets، useRequest، useColorMode، ...
│   ├── constants/              # وضعیت تیکت، فوتر، ویژگی‌های فروشگاه
│   ├── layouts/default.vue     # layout اصلی
│   ├── pages/index.vue         # صفحه تیکت‌ها
│   ├── services/ticket.ts      # فراخوانی API تیکت
│   ├── types/                  # تایپ‌های Ticket و API
│   └── utils/                  # api client، debounce، error helper
├── public/assets/              # فونت‌ها و assets استاتیک
└── nuxt.config.ts
```

## UI و Layout

صفحه اصلی شامل این بخش‌هاست:

- **LayoutHeader** — promo bar، نوار اصلی، mega menu
- **LayoutUserPanelShell** — سایدبار پنل کاربر + محتوای صفحه
- **LayoutShopFeatures** — کارت‌های ویژگی فروشگاه
- **LayoutFooter** — تماس، لینک‌ها، شبکه‌های اجتماعی، مجوزها
- **LayoutMobileNav** — navigation پایین (فقط موبایل)

Dark mode با toggle در هدر و کلاس `dark` روی `<html>` فعال می‌شود.

## API

جریان درخواست:

```
index.vue → useTickets → fetchUserTickets → api.fixent.ir
```

| لایه        | فایل                              | نقش                                      |
| ----------- | --------------------------------- | ---------------------------------------- |
| Service     | `app/services/ticket.ts`          | ساخت query و `$fetch`                    |
| HTTP client | `app/utils/http.ts`               | `$fetch.create` با `runtimeConfig`       |
| Composable  | `app/composables/useTickets.ts`   | state، debounce، sync با URL             |
| Request     | `app/composables/useRequest.ts`   | loading / error / abort                    |

Endpoint:

```
GET {apiBase}/Ticket/user-tickets
```

پیش‌فرض `apiBase` در `nuxt.config.ts`:

```
http://api.fixent.ir/api/
```

برای override در production، فایل `.env` بسازید:

```
NUXT_PUBLIC_API_BASE=http://api.fixent.ir/api/
```

### پارامترهای query

| پارامتر   | نوع    | توضیح                       |
| --------- | ------ | --------------------------- |
| `Page`    | number | شماره صفحه (پیش‌فرض: ۱)     |
| `PerPage` | number | تعداد در صفحه (پیش‌فرض: ۲۰) |
| `Search`  | string | جستجو (اختیاری)             |
| `Status`  | number | ۹، ۱۰، ۱۱، ۱۲ (اختیاری)     |
| `Id`      | number | شناسه تیکت (اختیاری)        |

### وضعیت‌های تیکت

| مقدار | معنی            |
| ----- | --------------- |
| 9     | در انتظار پاسخ  |
| 10    | در حال بررسی    |
| 11    | پاسخ داده شده   |
| 12    | بسته شده        |

کامپوننت‌ها مستقیماً API را صدا نمی‌زنند؛ `useTickets` از service استفاده می‌کند.

## تصمیمات فنی

### SPA

پروژه با `ssr: false` به‌صورت SPA اجرا می‌شود.

### Sync با Query String

```
/?page=2&perPage=20&status=9&search=payment
```

### Debounce جستجو

جستجو با `debounce` سفارشی (۴۰۰ms) در `useTickets` انجام می‌شود.

### Tailwind v4

استایل‌ها با `@tailwindcss/vite` و `@theme` در `app/assets/css/main.css` تعریف شده‌اند. کلاس‌های سفارشی فوتر و contact tile در `components.css` هستند.

### TypeScript

تایپ‌ها در `app/types/ticket/` (entity، api، filters، status) و `app/types/api.ts` قرار دارند.

## اگر فرصت بیشتری بود

- صفحه جزئیات تیکت (`/tickets/:id`)
- Proxy سمت سرور Nitro برای API (کاهش وابستگی به CORS)
- Pinia برای cache بین صفحات
- i18n
- تست واحد برای service و composable

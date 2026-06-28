<script setup lang="ts">
import {
  FOOTER_CONTACTS,
  FOOTER_LEGAL_LINKS,
  FOOTER_LICENSES,
  FOOTER_LINK_GROUPS,
} from "@/constants/footer";
</script>

<template>
  <footer
    class="amazing-glass-footer relative overflow-hidden pb-12 pt-24 transition-colors duration-500"
  >
    <div class="container relative z-10">
      <div class="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <LayoutFooterContactTile
          v-for="item in FOOTER_CONTACTS"
          :key="item.label"
          :item="item"
        />
      </div>

      <div
        class="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
      >
        <div class="space-y-8 xl:col-span-2">
          <div class="flex items-center gap-4">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-xl shadow-blue-600/30"
            >
              <span class="text-2xl font-black text-white">M</span>
            </div>
            <span
              class="text-2xl font-black uppercase text-gray-900 dark:text-white"
              >Mana<span class="text-blue-600">Shop</span></span
            >
          </div>
          <p
            class="max-w-md text-justify text-sm font-medium leading-8 text-gray-500 dark:text-gray-400"
          >
            ماناشاپ فراتر از یک فروشگاه، یک اکوسیستم هوشمند است. ما با حذف
            واسطه‌ها، جدیدترین‌های تکنولوژی را با گارانتی معتبر و قیمتی رقابتی
            به خانه‌های شما می‌آوریم. شفافیت، اصالت و سرعت، سه رکن اصلی ماست.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              aria-label="instagram"
              class="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-black/5 text-gray-500 transition-all duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-400"
            >
              <IconsInstagramIcon class="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="twitter"
              class="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-black/5 text-gray-500 transition-all duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-400"
            >
              <IconsTwitterIcon class="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="facebook"
              class="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-black/5 text-gray-500 transition-all duration-500 hover:scale-110 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-400"
            >
              <IconsFacebookIcon class="h-5 w-5" />
            </a>
          </div>
        </div>

        <LayoutFooterLinkGroup
          v-for="group in FOOTER_LINK_GROUPS"
          :key="group.title"
          :group="group"
        />

        <div class="flex flex-col items-center gap-6 lg:items-end">
          <h3 class="footer-title">مجوزهای قانونی</h3>
          <div class="flex gap-4">
            <div
              v-for="license in FOOTER_LICENSES"
              :key="license"
              class="group flex h-36 w-28 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white/30 p-4 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.02]"
            >
              <div
                class="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all duration-500 group-hover:text-blue-600 dark:bg-white/5 dark:text-gray-500 dark:group-hover:text-blue-400"
              >
                <IconsShieldCheckIcon class="h-7 w-7" />
              </div>
              <span
                class="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500"
              >
                {{ license }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between gap-8 border-t border-black/5 pt-10 dark:border-white/5 md:flex-row"
      >
        <p class="text-[11px] font-bold text-gray-500">
          © ۲۰۲۵ طراحی و توسعه توسط
          <span
            class="font-black text-gray-900 underline decoration-4 decoration-blue-500/30 dark:text-white"
          >
            ManaTeam </span
          >.
        </p>
        <div class="flex flex-wrap justify-center gap-8">
          <a
            v-for="link in FOOTER_LEGAL_LINKS"
            :key="link"
            href="#"
            class="legal-link"
            >{{ link }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

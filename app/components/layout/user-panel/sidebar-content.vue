<script setup lang="ts">
const { isOpen: submenuOpen, toggleSubmenu } = useSubmenuToggle();
</script>

<template>
  <div class="sticky top-10 space-y-6">
    <!-- Item Menu -->
    <div
      class="relative overflow-hidden bg-white/40 dark:bg-gray-950/60 backdrop-blur-3xl border border-white/60 dark:border-white/10 rounded-[2.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none"
    >
      <div
        class="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl"
      />

      <div
        class="relative flex flex-col items-center text-center pb-8 mb-6 border-b border-gray-200/30 dark:border-white/5"
      >
        <div class="relative mb-4">
          <div
            class="w-24 h-24 rounded-[2rem] bg-gradient-to-tr from-primary-500/20 to-primary-500/5 p-1 backdrop-blur-md border border-white/50"
          >
            <img
              src="/assets/images/author/team-img-04-1.png"
              alt="User"
              class="w-full h-full rounded-[1.8rem] object-cover"
            />
          </div>
          <div
            class="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 border-4 border-white/80 dark:border-gray-900 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <IconsCheckIcon class="w-3 h-3 text-white" />
          </div>
        </div>
        <h3 class="text-base font-black text-gray-900 dark:text-white">
          امیر رضایی
        </h3>
        <span
          class="inline-flex items-center px-3 py-1 mt-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-[10px] font-black"
          >کاربر سطح طلایی</span
        >
      </div>

      <nav class="space-y-2 relative">
        <a
          href="#"
          class="flex items-center gap-4 px-5 py-4 rounded-2xl bg-primary-500 text-white shadow-xl shadow-primary-500/30 transition-all hover:scale-[1.02] active:scale-95 group"
        >
          <IconsDashboardIcon class="w-5 h-5 opacity-90" />
          <span class="text-xs font-black">پیشخوان</span>
        </a>

        <a
          href="#"
          class="flex items-center justify-between px-5 py-4 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 hover:text-primary-500 transition-all group"
        >
          <div class="flex items-center gap-4">
            <IconsShoppingBagIcon
              class="w-5 h-5 group-hover:scale-110 transition-transform"
            />
            <span class="text-xs font-black">سفارش‌های من</span>
          </div>
          <span
            class="w-5 h-5 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/10 text-[10px] font-black group-hover:bg-primary-500 group-hover:text-white transition-colors"
            >۳</span
          >
        </a>

        <a
          href="#"
          class="flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 hover:text-primary-500 transition-all group"
        >
          <IconsCreditCardIcon
            class="w-5 h-5 group-hover:scale-110 transition-transform"
          />
          <span class="text-xs font-black">کیف پول و تراکنش‌ها</span>
        </a>

        <div class="relative submenu-container">
          <button
            type="button"
            class="w-full flex items-center justify-between px-5 py-4 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/5 transition-all group border border-transparent hover:border-white/50 dark:hover:border-white/10"
            @click="toggleSubmenu"
          >
            <div class="flex items-center gap-4">
              <div
                class="w-8 h-8 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:text-primary-500 transition-all"
              >
                <IconsSettingsIcon
                  class="w-5 h-5 transition-transform duration-700 group-hover:rotate-90"
                />
              </div>
              <span class="text-xs font-black">تنظیمات حساب</span>
            </div>
            <IconsChevronDownIcon
              class="w-4 h-4 transition-transform duration-300 arrow-icon opacity-50"
            />
          </button>

          <div
            class="submenu-content flex-col mt-2 mr-6 border-r-2 border-primary-500/20 pr-4 space-y-1 overflow-hidden transition-all duration-300"
            :class="submenuOpen ? 'flex' : 'hidden'"
          >
            <a
              href="#"
              class="relative py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-2 group/item"
            >
              <span
                class="w-1 h-1 rounded-full bg-gray-300 group-hover/item:bg-primary-500 transition-all"
              />
              ویرایش اطلاعات کاربری
            </a>
            <a
              href="#"
              class="relative py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-2 group/item"
            >
              <span
                class="w-1 h-1 rounded-full bg-gray-300 group-hover/item:bg-primary-500 transition-all"
              />
              تغییر رمز عبور
            </a>
            <a
              href="#"
              class="relative py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 flex items-center gap-2 group/item"
            >
              <span
                class="w-1 h-1 rounded-full bg-gray-300 group-hover/item:bg-primary-500 transition-all"
              />
              تنظیمات اطلاع‌رسانی
            </a>
          </div>
        </div>

        <a
          href="#"
          class="flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 hover:text-primary-500 transition-all group"
        >
          <IconsBellIcon
            class="w-5 h-5 group-hover:animate-bounce transition-transform"
          />
          <span class="text-xs font-black">پیام‌ها و اعلان‌ها</span>
        </a>

        <div class="pt-4 mt-4 border-t border-gray-200/30 dark:border-white/5">
          <a
            href="#"
            class="flex items-center gap-4 px-5 py-4 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all group"
          >
            <IconsLogoutIcon
              class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            />
            <span class="text-xs font-black">خروج از حساب</span>
          </a>
        </div>
      </nav>
    </div>

    <!-- Support Center -->
    <div
      class="p-6 rounded-[2.5rem] bg-white/10 dark:bg-primary-500/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
    >
      <div
        class="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-all duration-700"
      />

      <div class="relative z-10">
        <div
          class="w-12 h-12 rounded-2xl bg-primary-500/20 backdrop-blur-lg border border-primary-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500"
        >
          <IconsSupportIcon
            class="w-6 h-6 text-primary-600 dark:text-primary-400"
          />
        </div>

        <h4 class="text-gray-900 dark:text-white text-[14px] font-black mb-1">
          مرکز پشتیبانی مانا
        </h4>
        <p
          class="text-gray-500 dark:text-gray-400 text-[10px] font-bold mb-5 leading-5"
        >
          سوالی دارید؟ تیم ما آماده پاسخگویی سریع به شماست.
        </p>

        <button
          type="button"
          class="w-full py-3.5 bg-primary-500 text-white dark:bg-primary-500/20 dark:text-primary-400 dark:border dark:border-primary-500/30 rounded-2xl text-[11px] font-black transition-all active:scale-95 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
        >
          گفتگوی آنلاین
        </button>
      </div>

      <div
        class="absolute -bottom-12 -left-12 w-28 h-28 bg-primary-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"
      />
    </div>
  </div>
</template>

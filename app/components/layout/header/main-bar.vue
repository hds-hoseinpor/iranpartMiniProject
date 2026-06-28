<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <div class="container">
    <div class="flex items-center justify-between h-20 gap-8">
      <div class="flex items-center gap-4">
        <button
          id="resMenu"
          class="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <IconsMenuLinesIcon
            class="w-6 h-6 text-gray-700 dark:text-gray-300"
          />
        </button>
        <button
          id="mobile-search-toggle"
          class="md:hidden p-2.5 rounded-xl border border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-600 dark:text-gray-400 transition-all shadow-sm"
        >
          <IconsSearchIcon class="w-5 h-5" />
        </button>
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <img src="/assets/images/logo.png" class="w-30" alt="ماناشاپ" />
        </NuxtLink>
      </div>

      <div
        id="search-wrapper"
        class="hidden md:flex flex-1 max-w-4xl relative group/search mx-auto"
      >
        <div class="relative w-full z-[10000]">
          <input
            type="text"
            id="main-search-input"
            class="w-full bg-gray-200/60 dark:bg-[var(--color-primary-950)]/60 backdrop-blur-md border border-gray-300/30 dark:border-white/5 rounded-2xl py-4 pr-12 pl-40 text-sm font-bold text-right outline-none focus:bg-white dark:focus:bg-[var(--color-primary-950)] focus:ring-4 ring-[var(--color-primary-500)]/40 transition-all placeholder:text-gray-500 shadow-sm"
            placeholder="جستجوی سراسری در محصولات ..."
          />

          <div
            class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500"
          >
            <IconsSearchIcon class="w-5 h-5" />
          </div>

          <div
            class="absolute left-2 top-1/2 -translate-y-1/2 flex items-center h-[75%] gap-2"
          >
            <div class="h-full w-px bg-gray-300/40 dark:bg-white/10 ml-1"></div>
            <button
              class="h-full px-4 flex items-center gap-3 rounded-xl transition-all duration-300 group/archive bg-white border border-gray-200 text-gray-700 shadow-sm hover:border-[var(--color-primary-500)] dark:bg-[var(--color-primary-800)]/60 dark:border-white/10 dark:text-gray-200 dark:hover:bg-[var(--color-primary-500)]/10"
            >
              <div
                class="flex items-center justify-center w-6 h-6 rounded-lg bg-gray-100 dark:bg-white/10 group-hover/archive:bg-[var(--color-primary-500)] group-hover/archive:text-white transition-all duration-300"
              >
                <IconsChevronLeftIcon class="w-3.5 h-3.5" />
              </div>
              <span class="text-[11px] font-black whitespace-nowrap"
                >آرشیو محصولات</span
              >
            </button>
          </div>
        </div>

        <div
          id="mega-search-panel"
          class="absolute top-[30px] left-[-15px] right-[-15px] pt-[65px] bg-white/90 dark:bg-[var(--color-primary-950)]/90 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] opacity-0 invisible translate-y-4 group-focus-within/search:opacity-100 group-focus-within/search:visible group-focus-within/search:translate-y-0 transition-all duration-500 z-[9999]"
        >
          <div class="p-8">
            <div class="flex items-center justify-start gap-3 mb-6">
              <div
                class="p-1.5 bg-[var(--color-primary-500)]/10 rounded-lg text-[var(--color-primary-500)]"
              >
                <IconsEyeIcon class="w-4 h-4" />
              </div>
              <span
                class="text-[13px] font-black text-gray-800 dark:text-gray-100 uppercase tracking-tighter"
                >محصولات پربازدید هفته</span
              >
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <div
                class="group/card relative flex items-center p-2 bg-white/40 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/5 rounded-[1.8rem] hover:bg-white dark:hover:bg-[var(--color-primary-900)] transition-all duration-500 cursor-pointer shadow-sm"
              >
                <div
                  class="relative w-20 h-20 bg-gray-100 dark:bg-[var(--color-primary-800)] rounded-[1.5rem] p-2 flex-shrink-0"
                >
                  <img
                    src="/assets/images/product/mobile-3.png"
                    class="w-full h-full object-contain group-hover/card:scale-110 transition-transform duration-500"
                  />
                </div>
                <div class="flex-1 pr-4">
                  <h4
                    class="text-[12px] font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover/card:text-[var(--color-primary-500)] transition-colors line-clamp-1"
                  >
                    ساعت هوشمند مدل Watch Ultra 2 بند تیتانیوم
                  </h4>
                  <div class="flex items-center justify-between">
                    <div
                      class="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-xl text-[14px] font-black text-gray-900 dark:text-white"
                    >
                      ۳,۳۲۰,۰۰۰
                      <span class="text-[9px] text-gray-400 mr-1 font-bold"
                        >تومان</span
                      >
                    </div>
                    <IconsChevronLeftIcon
                      class="w-4 h-4 ml-2 text-[var(--color-primary-500)] opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all"
                    />
                  </div>
                </div>
              </div>
              <div
                class="group/card relative flex items-center p-2 bg-white/40 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/5 rounded-[1.8rem] hover:bg-white dark:hover:bg-[var(--color-primary-900)] transition-all duration-500 cursor-pointer shadow-sm"
              >
                <div
                  class="relative w-20 h-20 bg-gray-100 dark:bg-[var(--color-primary-800)] rounded-[1.5rem] p-2 flex-shrink-0"
                >
                  <img
                    src="/assets/images/product/mobile-4.png"
                    class="w-full h-full object-contain group-hover/card:scale-110 transition-transform duration-500"
                  />
                </div>
                <div class="flex-1 pr-4">
                  <h4
                    class="text-[12px] font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover/card:text-[var(--color-primary-500)] transition-colors line-clamp-1"
                  >
                    ساعت هوشمند مدل Watch Ultra 2 بند تیتانیوم
                  </h4>
                  <div class="flex items-center justify-between">
                    <div
                      class="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-xl text-[14px] font-black text-gray-900 dark:text-white"
                    >
                      ۳,۳۲۰,۰۰۰
                      <span class="text-[9px] text-gray-400 mr-1 font-bold"
                        >تومان</span
                      >
                    </div>
                    <IconsChevronLeftIcon
                      class="w-4 h-4 ml-2 text-[var(--color-primary-500)] opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              class="border-t border-dashed border-gray-200 dark:border-white/10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div class="space-y-4">
                <div class="flex items-center gap-2 text-secondary-500">
                  <span class="animate-pulse">
                    <IconsFireTrendIcon />
                  </span>
                  <span
                    class="text-[13px] font-black text-gray-800 dark:text-gray-200 uppercase tracking-tighter"
                    >جستجوهای ترند</span
                  >
                </div>
                <div class="flex flex-wrap gap-2">
                  <a
                    href="#"
                    class="px-4 py-2 bg-gray-100 dark:bg-white/5 text-[11px] font-bold text-gray-500 dark:text-gray-400 rounded-full hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-500)] border border-transparent transition-all"
                    >گوشی iphone 17</a
                  >
                  <a
                    href="#"
                    class="px-4 py-2 bg-gray-100 dark:bg-white/5 text-[11px] font-bold text-gray-500 dark:text-gray-400 rounded-full hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-500)] border border-transparent transition-all"
                    >گوشی iphone 16</a
                  >
                  <a
                    href="#"
                    class="px-4 py-2 bg-gray-100 dark:bg-white/5 text-[11px] font-bold text-gray-500 dark:text-gray-400 rounded-full hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-500)] border border-transparent transition-all"
                    >گوشی S25</a
                  >

                  <a
                    href="#"
                    class="px-4 py-2 bg-gray-100 dark:bg-white/5 text-[11px] font-bold text-gray-500 dark:text-gray-400 rounded-full hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-500)] border border-transparent transition-all"
                    >گوشی iphone 17</a
                  >
                  <a
                    href="#"
                    class="px-4 py-2 bg-gray-100 dark:bg-white/5 text-[11px] font-bold text-gray-500 dark:text-gray-400 rounded-full hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-500)] border border-transparent transition-all"
                    >گوشی iphone 16</a
                  >
                  <a
                    href="#"
                    class="px-4 py-2 bg-gray-100 dark:bg-white/5 text-[11px] font-bold text-gray-500 dark:text-gray-400 rounded-full hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-500)] border border-transparent transition-all"
                    >گوشی S25</a
                  >
                </div>
              </div>
              <div
                class="space-y-4 border-r border-gray-100 dark:border-white/5 pr-8"
              >
                <div
                  class="flex items-center gap-2 text-gray-800 dark:text-gray-200"
                >
                  <IconsClockIcon class="w-4 h-4" />
                  <span class="text-[12px] font-black">جستجوهای اخیر شما</span>
                </div>
                <ul class="space-y-2">
                  <li
                    class="flex items-center justify-between group/h cursor-pointer text-[12px] font-bold text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary-500)]"
                  >
                    <span>مک بوک</span>
                    <button
                      class="opacity-0 group-hover/h:opacity-100 text-red-400"
                    >
                      ×
                    </button>
                  </li>
                  <li
                    class="flex items-center justify-between group/h cursor-pointer text-[12px] font-bold text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary-500)]"
                  >
                    <span>گوشی شیائومی</span>
                    <button
                      class="opacity-0 group-hover/h:opacity-100 text-red-400"
                    >
                      ×
                    </button>
                  </li>
                  <li
                    class="flex items-center justify-between group/h cursor-pointer text-[12px] font-bold text-gray-600 dark:text-gray-400 hover:text-[var(--color-primary-500)]"
                  >
                    <span>گوشی سامسونگ</span>
                    <button
                      class="opacity-0 group-hover/h:opacity-100 text-red-400"
                    >
                      ×
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="p-2.5 rounded-xl border border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md hover:border-primary-500/50 hover:bg-white/80 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all duration-300 shadow-sm"
          @click="colorMode.toggle()"
        >
          <IconsSunIcon class="w-5 h-5 hidden dark:block" />
          <IconsMoonIcon class="w-5 h-5 block dark:hidden" />
        </button>

        <div class="relative group">
          <button
            id="login-btn"
            class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200/50 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md hover:border-primary-500/50 hover:bg-primary-50/50 dark:hover:bg-primary-500/10 transition-all duration-300 group shadow-sm"
          >
            <IconsUserIcon
              class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 transition-colors"
            />
            <span
              class="text-xs font-black text-gray-700 dark:text-gray-200 hidden lg:block uppercase tracking-tighter"
              >ورود یا ثبت‌نام</span
            >
          </button>
        </div>

        <button
          id="cart-btn"
          class="relative p-2.5 rounded-xl border border-secondary-500/20 bg-secondary-500/10 dark:bg-secondary-500/20 backdrop-blur-md hover:bg-secondary-500 hover:text-white transition-all duration-300 group shadow-lg shadow-secondary-500/10"
        >
          <IconsShoppingBagIcon
            class="w-6 h-6 text-secondary-600 group-hover:text-white transition-colors"
          />

          <span
            class="absolute -top-1.5 -right-1.5 bg-primary-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-lg border-2 border-white dark:border-gray-950 shadow-sm"
          >
            2
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

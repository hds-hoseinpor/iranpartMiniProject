<script setup lang="ts"></script>

<template>
  <nav
    class="hidden lg:block bg-white/50 dark:bg-gray-950/50 border-t border-gray-100 dark:border-gray-800"
  >
    <div class="container mx-auto px-8">
      <ul class="flex items-center gap-8 py-3">
        <li class="group/main static">
          <a
            href="#"
            class="flex items-center gap-2 py-4 text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover/main:text-[var(--color-primary-500)] transition-colors"
          >
            <IconsMegaMenuIcon class="size-5" />
            مگاتب منو
          </a>

          <div
            class="absolute top-full right-0 left-0 w-full bg-white dark:bg-[var(--color-primary-950)] border-t border-gray-100 dark:border-[var(--color-primary-900)] shadow-2xl opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-200 z-50 flex h-[580px]"
          >
            <div class="container mx-auto flex h-full">
              <div
                class="w-64 border-l border-gray-100 dark:border-[var(--color-primary-900)] py-2 overflow-y-auto bg-gray-50/80 dark:bg-[var(--color-primary-900)]/30"
              >
                <ul class="flex flex-col">
                  <li
                    class="mega-tab-item active group/tab"
                    data-target="dk-digital"
                  >
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] dark:group-[.active]/tab:text-[var(--color-primary-400)] transition-all"
                    >
                      <IconsSmartphoneIcon class="w-5 h-5" />
                      کالای دیجیتال
                    </a>
                  </li>

                  <li class="mega-tab-item group/tab" data-target="dk-home">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] transition-all"
                    >
                      <IconsHomeIcon class="w-5 h-5" />
                      خانه و آشپزخانه
                    </a>
                  </li>

                  <li class="mega-tab-item group/tab" data-target="dk-fashion">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] transition-all"
                    >
                      <IconsUserIcon class="w-5 h-5" />
                      مد و پوشاک
                    </a>
                  </li>

                  <li class="mega-tab-item group/tab" data-target="dk-beauty">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] transition-all"
                    >
                      <IconsFaceSmileIcon class="w-5 h-5" />
                      زیبایی و سلامت
                    </a>
                  </li>

                  <li class="mega-tab-item group/tab" data-target="dk-toys">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] transition-all"
                    >
                      <IconsStarIcon class="w-5 h-5" />
                      اسباب بازی و کودک
                    </a>
                  </li>

                  <li class="mega-tab-item group/tab" data-target="dk-sports">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] transition-all"
                    >
                      <IconsLightBulbIcon class="w-5 h-5" />
                      ورزش و سفر
                    </a>
                  </li>

                  <li class="mega-tab-item group/tab" data-target="dk-books">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] transition-all"
                    >
                      <IconsBookOpenIcon class="w-5 h-5" />
                      کتاب و لوازم تحریر
                    </a>
                  </li>

                  <li class="mega-tab-item group/tab" data-target="dk-auto">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] transition-all"
                    >
                      <IconsArrowsExchangeIcon class="w-5 h-5" />
                      خودرو و موتورسیکلت
                    </a>
                  </li>

                  <li class="mega-tab-item group/tab" data-target="dk-tools">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] transition-all"
                    >
                      <IconsSettingsIcon class="w-5 h-5" />
                      صنعتی و ابزار
                    </a>
                  </li>

                  <li class="mega-tab-item group/tab" data-target="dk-garden">
                    <a
                      href="#"
                      class="flex items-center gap-3 px-6 py-4 text-[13px] font-bold text-gray-600 dark:text-gray-400 group-[.active]/tab:bg-white dark:group-[.active]/tab:bg-[var(--color-primary-950)] group-[.active]/tab:text-[var(--color-primary-600)] transition-all"
                    >
                      <IconsHandRaisedIcon class="w-5 h-5" />
                      کشاورزی و باغبانی
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="flex-1 p-8 overflow-y-auto custom-scrollbar bg-white dark:bg-[var(--color-primary-950)]"
              >
                <div id="dk-digital" class="mega-tab-content">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-[var(--color-primary-500)]"
                    >
                      مشاهده تمام محصولات کالای دیجیتال
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-[var(--color-primary-500)] pr-3"
                      >
                        <IconsSmartphoneIcon class="w-4 h-4" />
                        موبایل
                      </a>
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)] transition-colors"
                            >گوشی‌های هوشمند</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)] transition-colors"
                            >برند اپل (iPhone)</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)] transition-colors"
                            >برند سامسونگ</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)] transition-colors"
                            >برند شیائومی</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)] transition-colors"
                            >گوشی‌های میان‌رده</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)] transition-colors"
                            >گوشی‌های اقتصادی</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)] transition-colors"
                            >گوشی‌های گیمینگ</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-[var(--color-primary-500)] pr-3"
                      >
                        <IconsDesktopIcon class="w-4 h-4" />
                        لپ‌تاپ
                      </a>
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >لپ‌تاپ‌های گیمینگ</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >مک‌بوک‌های اپل</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >لپ‌تاپ‌های تجاری</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >لپ‌تاپ‌های دانشجویی</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >لپ‌تاپ‌های فوق سبک</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-[var(--color-primary-500)] pr-3"
                      >
                        <IconsBellIcon class="w-4 h-4" />
                        هدفون و ساعت
                      </a>
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >هندزفری بی‌سیم</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >ساعت‌های هوشمند</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >هدفون‌های گیمینگ</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >اسپیکر و سیستم صوتی</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >مچ‌بند سلامت</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >هدفون‌های نویزکنسلینگ</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-[var(--color-primary-500)] pr-3"
                      >
                        <IconsShieldCheckIcon class="w-4 h-4" />
                        لوازم جانبی
                      </a>
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >کابل و شارژر</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >پاوربانک (شارژر همراه)</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >کیف و کاور</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >پایه موبایل و لپ‌تاپ</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >محافظ صفحه نمایش</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-[var(--color-primary-500)] pr-3"
                      >
                        <IconsArchiveBoxIcon class="w-4 h-4" />
                        ذخیره‌سازی
                      </a>
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >هارد اکسترنال</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >فلش مموری</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >کارت حافظه</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >هارد SSD</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >درایوهای NAS</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-[var(--color-primary-500)] pr-3"
                      >
                        <IconsCameraIcon class="w-4 h-4" />
                        دوربین
                      </a>
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >دوربین عکاسی</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >لنز و لوازم حرفه‌ای</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >دوربین فیلمبرداری</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >دوربین‌های اکشن</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >دوربین‌های مداربسته</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-[var(--color-primary-500)] pr-3"
                      >
                        <IconsCpuChipIcon class="w-4 h-4" />
                        کامپیوتر و قطعات
                      </a>
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >کارت گرافیک</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >پردازنده (CPU)</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >مادربورد</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >رم (RAM)</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >مانیتور و نمایشگر</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >کیبورد و موس</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-[var(--color-primary-500)] pr-3"
                      >
                        <IconsVideoCameraIcon class="w-4 h-4" />
                        گیمینگ
                      </a>
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >کنسول بازی</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >دسته بازی</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >صندلی گیمینگ</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >میز گیمینگ</a
                          >
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:text-[var(--color-primary-500)]"
                            >کارت گرافیک گیمینگ</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="dk-home" class="mega-tab-content hidden">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-green-500"
                    >
                      مشاهده تمام محصولات خانه و آشپزخانه
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-green-500 pr-3"
                        >لوازم آشپزخانه</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >یخچال و فریزر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >اجاق گاز و هود</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >ماشین ظرفشویی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >مایکروویو و فر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >چای‌ساز و قهوه‌ساز</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >آب‌سردکن و تصفیه آب</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-green-500 pr-3"
                        >مبلمان</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >مبل و کاناپه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >صندلی و میز ناهارخوری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500">تخت خواب</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >کمد و قفسه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >میز تحریر و کتابخانه</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-green-500 pr-3"
                        >دکوراسیون</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >پرده و رومیزی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >فرش و گلیم</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >تابلو و ساعت دیواری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >گلدان و تزئینات</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >آینه و شمعدان</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-green-500 pr-3"
                        >نور و روشنایی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >لوستر و چراغ</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >لامپ و هالوژن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500">چراغ خواب</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >چراغ مطالعه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >چراغ اضطراری</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-green-500 pr-3"
                        >سرویس خواب</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >ملحفه و روتختی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >بالش و تشک</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >پتو و لحاف</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >روبالشی و روتشکی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-green-500 pr-3"
                        >نظافت</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-green-500">جاروبرقی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >ماشین لباسشویی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >اتو و میز اتو</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >شوینده و پاک کننده</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500">سطل زباله</a>
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-green-500 pr-3"
                        >حمام و سرویس بهداشتی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >دوش و شیرآلات</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >توالت و روشویی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >موکت و حصیر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >آینه و کابینت</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-green-500 pr-3"
                        >حیاط و تراس</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >میز و صندلی باغچه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >چتر و سایبان</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >باربیکیو و منقل</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-green-500"
                            >گلدان و گیاه مصنوعی</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="dk-fashion" class="mega-tab-content hidden">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-pink-500"
                    >
                      مشاهده تمام محصولات مد و پوشاک
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-pink-500 pr-3"
                        >لباس مردانه</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >پیراهن و شلوار</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >تی‌شرت و پولوشرت</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">کت و شلوار</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس ورزشی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس مجلسی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس زیر</a>
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-pink-500 pr-3"
                        >لباس زنانه</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >مانتو و شلوار</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >بلوز و دامن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس مجلسی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس ورزشی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس خواب</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس زیر</a>
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-pink-500 pr-3"
                        >بچه‌گانه</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-pink-500">پسرانه</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">دخترانه</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">نوزادی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس مدرسه</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس عروسک</a>
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-pink-500 pr-3"
                        >کفش</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-pink-500">کفش مردانه</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">کفش زنانه</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">کفش ورزشی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">کفش مجلسی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >کفش بچه‌گانه</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-pink-500 pr-3"
                        >اکسسوری</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >کیف و کوله پشتی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">کلاه و شال</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >کمربند و بند ساعت</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >عینک آفتابی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >دستکش و جوراب</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-pink-500 pr-3"
                        >ساعت و زیورآلات</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-pink-500">ساعت مچی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >گردنبند و دستبند</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >انگشتر و النگو</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >گوشواره و پابند</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >ساعت دیواری</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-pink-500 pr-3"
                        >لباس عروس و داماد</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس عروس</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس داماد</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >تزئینات عروسی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">کفش عروس</a>
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-pink-500 pr-3"
                        >مزون و اختصاصی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >طراحی اختصاصی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >دوخت سفارشی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500"
                            >برندهای لوکس</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-pink-500">لباس سنتی</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="dk-beauty" class="mega-tab-content hidden">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-purple-500"
                    >
                      مشاهده تمام محصولات زیبایی و سلامت
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-purple-500 pr-3"
                        >آرایشی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >رژ لب و برق لب</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >فونداسیون و پودر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >سایه و خط چشم</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >ریمل و مژه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >رژگونه و هایلایتر</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-purple-500 pr-3"
                        >بهداشتی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >شامپو و نرم کننده</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >صابون و ژل شستشو</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >خمیردندان و مسواک</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >ضد تعریق و خوشبوکننده</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >تونر و مرطوب کننده</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-purple-500 pr-3"
                        >عطر</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >عطر مردانه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >عطر زنانه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500">ادکلن</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >اسپری بدن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >عطرهای اختصاصی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-purple-500 pr-3"
                        >لوازم شخصی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >تیغ و اپیلیدی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >ماشین اصلاح مو</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >سشوار و اتوی مو</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >برس و شانه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >ناخنگیر و قیچی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-purple-500 pr-3"
                        >سلامت و درمان</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >ویتامین و مکمل</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >لوازم پزشکی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >داروهای بدون نسخه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >محصولات ماساژ</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >ترازو و فشارسنج</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-purple-500 pr-3"
                        >مراقبت پوست</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >کرم ضد آفتاب</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >لوسیون بدن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >ماسک صورت</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >اسکراب و پیلینگ</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >محصولات آکنه</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-purple-500 pr-3"
                        >مراقبت مو</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-purple-500">رنگ مو</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >محصولات ابرو و مژه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >محصولات ریش و سبیل</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >محصولات ضد ریزش</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-purple-500 pr-3"
                        >آرایشگاه و سالن</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >لوازم حرفه‌ای</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >صندلی آرایشگاه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >آینه و میز آرایش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-purple-500"
                            >لوازم استریل</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="dk-toys" class="mega-tab-content hidden">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-yellow-500"
                    >
                      مشاهده تمام محصولات اسباب بازی و کودک
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-yellow-500 pr-3"
                        >اسباب بازی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >ماشین و موتور</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >عروسک و پولیش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >لگو و ساختنی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >فکری و آموزشی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >بازی‌های تخته‌ای</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-yellow-500 pr-3"
                        >پوشاک کودک</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >لباس نوزاد</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >لباس پسرانه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >لباس دخترانه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500">کفش کودک</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >کلاه و جوراب</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-yellow-500 pr-3"
                        >غذای کودک</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-yellow-500">شیر خشک</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >پوره و غذای آماده</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >بیسکویت و تنقلات</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >مکمل و ویتامین</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >لوازم تغذیه</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-yellow-500 pr-3"
                        >وسایل نوزاد</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >کریر و کالسکه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >صندلی ماشین</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >تخت و روروئک</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >پوشک و مرطوب کننده</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >شیشه شیر و پستانک</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-yellow-500 pr-3"
                        >سرگرمی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >دوچرخه و اسکوتر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >استخر بادی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >تاب و سرسره</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >لوازم نقاشی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >کتاب و قصه</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-yellow-500 pr-3"
                        >آموزشی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >کامپیوتر کودک</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >تبلت آموزشی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >پازل و معما</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >موسیقی کودک</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >زبان آموزی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-yellow-500 pr-3"
                        >ایمنی و بهداشت</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >محافظ گوشه‌ها</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >گیت و نرده محافظ</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >دماسنج و مراقبت</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >ضد عفونی کننده</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-yellow-500 pr-3"
                        >جشن و تولد</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >تزئینات جشن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >کیک و شیرینی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >هدیه و سوپرایز</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-yellow-500"
                            >کارت دعوت</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="dk-sports" class="mega-tab-content hidden">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-blue-500"
                    >
                      مشاهده تمام محصولات ورزش و سفر
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-blue-500 pr-3"
                        >لوازم ورزشی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-blue-500">توپ و راکت</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >دمبل و هالتر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >طناب و کش ورزشی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500">لباس ورزشی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500">کفش ورزشی</a>
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-blue-500 pr-3"
                        >باشگاه خانگی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >تردمیل و دوچرخه ثابت</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >الپتیکال و استپر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >نیمکت بدنسازی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >موسیقی ورزشی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >لوازم جانبی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-blue-500 pr-3"
                        >کوهنوردی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >کفش و کتانی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500">کوله پشتی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >چادر و کیسه خواب</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >طناب و کارابین</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >وسایل ایمنی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-blue-500 pr-3"
                        >سفر</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >چمدان و ساک</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >کیف لوازم بهداشتی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >پاوربانک مسافرتی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >عینک و کلاه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >نقشه و راهنما</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-blue-500 pr-3"
                        >کمپینگ</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >اجاق و باربیکیو</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >چراغ قوه و چراغ</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500">ظروف سفری</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >تشک و زیرانداز</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >وسایل آشپزی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-blue-500 pr-3"
                        >دوچرخه</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >دوچرخه کوهستان</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >دوچرخه شهری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >لوازم جانبی دوچرخه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500">کلاه ایمنی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >پمپ و تعمیرات</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-blue-500 pr-3"
                        >شنا و آبی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >مایو و عینک شنا</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >تشک و اسباب بازی آبی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >کفش و دماغی شنا</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >لوازم غواصی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-blue-500 pr-3"
                        >ورزش‌های تخصصی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-blue-500">گلف و تنیس</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500"
                            >اسکی و اسنوبرد</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500">اسب‌سواری</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-blue-500">پینت بال</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="dk-books" class="mega-tab-content hidden">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-indigo-500"
                    >
                      مشاهده تمام محصولات کتاب و لوازم تحریر
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-indigo-500 pr-3"
                        >کتاب</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >رمان و داستان</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >کتاب دانشگاهی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >کودک و نوجوان</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >تاریخ و سیاست</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >مذهبی و عرفانی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-indigo-500 pr-3"
                        >لوازم التحریر</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >خودکار و روان‌نویس</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >مداد و پاک‌کن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >دفتر و کاغذ</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >جامدادی و کیف</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >خط کش و گونیا</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-indigo-500 pr-3"
                        >هنری</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >رنگ و قلمو</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >بوم و کاغذ طراحی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >مداد شمعی و پاستل</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >مجسمه سازی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >کالیگرافی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-indigo-500 pr-3"
                        >اداری</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >پرونده و زونکن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >مهر و تاریخ‌زن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >منگنه و سوزن منگنه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >تمبر و پاکت نامه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >کاغذ کپی و پرینتر</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-indigo-500 pr-3"
                        >کاغذ و بسته‌بندی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >کاغذ کادو</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >ربان و تزئینات</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >جعبه و کارتن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >نوار چسب و چسب</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >کارت و برچسب</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-indigo-500 pr-3"
                        >نوشت‌افزار دیجیتال</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >تبلت طراحی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500">قلم نوری</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >نرم‌افزار طراحی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >اسکنر و پرینتر</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-indigo-500 pr-3"
                        >آموزشی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-indigo-500">فلش کارت</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >پازل آموزشی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >نقشه و اطلس</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500">کیت علمی</a>
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-indigo-500 pr-3"
                        >کتاب‌های الکترونیکی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >ایبوک ریدر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >کتاب‌های صوتی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >اشتراک کتابخانه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-indigo-500"
                            >اپلیکیشن‌های مطالعه</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="dk-auto" class="mega-tab-content hidden">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-red-500"
                    >
                      مشاهده تمام محصولات خودرو و موتورسیکلت
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-red-500 pr-3"
                        >لوازم خودرو</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >روغن و ضد یخ</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >لاستیک و رینگ</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >باتری و استارت</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >فیلتر هوا و روغن</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >تیغه برف پاک کن</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-red-500 pr-3"
                        >موتورسیکلت</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-red-500">کلاه ایمنی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >لوازم یدکی موتور</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >پوشاک موتورسوار</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >زین و باربند</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >آینه و روشنایی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-red-500 pr-3"
                        >صوتی و تصویری</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >ضبط و پخش خودرو</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >اسپیکر و آمپلی فایر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >دوربین دنده عقب</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500">هدآپ دیسپلی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >کابل و اتصالات</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-red-500 pr-3"
                        >ابزار</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-red-500">جعبه ابزار</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >آچار و پیچ گوشتی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >جک و گاز آچار</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >فنر و کمک فنر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >لوازم برقی خودرو</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-red-500 pr-3"
                        >کارواش</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >شامپو و واکس</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500">برس و اسفنج</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500">جاذب رطوبت</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >دستگاه کارواش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >پولیش و درخشان کننده</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-red-500 pr-3"
                        >یدکی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-red-500">سیستم تعلیق</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500">تسمه و پولی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500">شمع و کوئل</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >ترمز و کاسه چرخ</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >رادیاتور و شلنگ</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-red-500 pr-3"
                        >ایمنی و نگهداری</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >کپسول آتش‌نشانی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >جکسه و مثلث خطر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >ضد سرقت و آلارم</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >کاور و پارکینگی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-red-500 pr-3"
                        >لوازم داخلی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-red-500">روکش صندلی</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >فرش و زیرپایی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500">آینه و شیشه</a>
                        </li>
                        <li>
                          <a href="#" class="hover:text-red-500"
                            >جاکلیدی و نگهدارنده</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="dk-tools" class="mega-tab-content hidden">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-secondary-500"
                    >
                      مشاهده تمام محصولات صنعتی و ابزار
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-secondary-500 pr-3"
                        >ابزار دستی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >آچار و پیچ گوشتی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >انبر و پliers</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >چکش و پتک</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >اره و اره مویی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >متر و خط کش</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-secondary-500 pr-3"
                        >ابزار برقی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >دریل و پیچ گوشتی برقی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >اره برقی و فرز</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >سمباده و پولیشر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >هویه و لحیم کاری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >شارژر و باتری</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-secondary-500 pr-3"
                        >ایمنی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >کلاه و عینک ایمنی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >دستکش و کفش ایمنی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >ماسک و محافظ گوش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >جلیقه و لباس کار</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >کپسول آتش‌نشانی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-secondary-500 pr-3"
                        >اندازه‌گیری</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >متر لیزری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >کولیس و میکرومتر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >تراز و شاغول</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >دماسنج و رطوبت سنج</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >آمپرمتر و مولتی متر</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-secondary-500 pr-3"
                        >جوشکاری</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >دستگاه جوش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >ماسک جوشکاری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >الکترود و سیم جوش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >انبر و چکش جوشکاری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >گاز و اکسیژن</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-secondary-500 pr-3"
                        >باغبانی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >قیچی باغبانی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >اره و تبر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >بیل و شن کش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >چمن زن و هرس برقی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >آبپاش و شلنگ</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-secondary-500 pr-3"
                        >نگهداری و تعمیر</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >روغن و گریس</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >چسب و درزگیر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >سیم و کابل</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >پیچ و مهره</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-secondary-500 pr-3"
                        >ماشین‌آلات</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >کمپرسور باد</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >پمپ آب و شناور</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >ژنراتور و موتور</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-secondary-500"
                            >جرثقیل و بالابر</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="dk-garden" class="mega-tab-content hidden">
                  <div class="flex items-center justify-between mb-8">
                    <a
                      href="#"
                      class="flex items-center gap-1 text-[14px] font-black text-gray-900 dark:text-white hover:text-emerald-500"
                    >
                      مشاهده تمام محصولات کشاورزی و باغبانی
                      <IconsChevronRightIcon class="w-4 h-4 rotate-180" />
                    </a>
                  </div>

                  <div class="grid grid-cols-4 gap-x-6 gap-y-10">
                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-emerald-500 pr-3"
                        >بذر و نهال</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >بذر سبزیجات</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >بذر گل و گیاهان زینتی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >نهال میوه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >قلمه و پیاز</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >بذر صیفی جات</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-emerald-500 pr-3"
                        >کود و سم</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >کود حیوانی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >کود شیمیایی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >کود مایع و تقویتی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >سموم دفع آفات</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >قارچ کش و علف کش</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-emerald-500 pr-3"
                        >آبیاری</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >شلنگ و اتصالات</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >پمپ آب و قطره چکان</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >آبپاش و مه پاش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >تایمر و سیستم اتوماتیک</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >منبع و مخزن آب</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-emerald-500 pr-3"
                        >ابزار باغبانی</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >بیل و بیلچه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >چنگک و شن کش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >قیچی باغبانی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >اره و تبر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >فرغون و سطل</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-emerald-500 pr-3"
                        >گل و گیاه</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >گلدان و زیرگلدانی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >خاک و بستر کاشت</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >گیاهان آپارتمانی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >گیاهان فضای باز</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >کاکتوس و ساکولنت</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-emerald-500 pr-3"
                        >ماشین‌آلات</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >تراکتور و تیلر</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >دروگر و کمباین</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >سمپاش و کودپاش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >چمن زن و علف تراش</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >پمپ و موتور آب</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-emerald-500 pr-3"
                        >پرورش و دامداری</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >خوراک دام و طیور</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >تجهیزات مرغداری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >لوازم زنبورداری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >آبخوری و دانخوری</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >قرص و مکمل دامی</a
                          >
                        </li>
                      </ul>
                    </div>

                    <div class="space-y-4">
                      <a
                        href="#"
                        class="flex items-center gap-2 text-[14px] font-black text-gray-900 dark:text-white border-r-2 border-emerald-500 pr-3"
                        >تجهیزات گلخانه</a
                      >
                      <ul
                        class="space-y-3 pr-4 text-[12.5px] text-gray-500 dark:text-gray-400"
                      >
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >پوشش گلخانه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >سیستم گرمایشی</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >سیستم تهویه</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >قفسه و گروباکس</a
                          >
                        </li>
                        <li>
                          <a href="#" class="hover:text-emerald-500"
                            >کنترل رطوبت و دما</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="group/megalist static">
          <a
            href="#"
            class="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-4"
          >
            مگالیست منو
            <IconsChevronDownIcon class="w-4 h-4" />
          </a>

          <div
            class="absolute top-full right-0 left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-2xl opacity-0 invisible group-hover/megalist:opacity-100 group-hover/megalist:visible transition-all duration-300 z-40 transform translate-y-2 group-hover/megalist:translate-y-0"
          >
            <div class="container mx-auto px-8 py-10">
              <div class="grid grid-cols-5 gap-8">
                <div class="col-span-3 grid grid-cols-3 gap-6">
                  <div class="space-y-4">
                    <h4
                      class="font-black text-sm mb-4 dark:text-white flex items-center gap-2"
                    >
                      <IconsLightBulbIcon class="w-4 h-4 text-primary-500" />
                      لوازم الکترونیکی
                    </h4>
                    <ul class="space-y-3">
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          اپل (Apple)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-400 rounded-full"
                          ></span>
                          سامسونگ (Samsung)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-300 rounded-full"
                          ></span>
                          سونی (Sony)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          هواوی (Huawei)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-600 rounded-full"
                          ></span>
                          ال‌جی (LG)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          شیائومی (Xiaomi)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-400 rounded-full"
                          ></span>
                          دِل (Dell)
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="space-y-4">
                    <h4
                      class="font-black text-sm mb-4 dark:text-white flex items-center gap-2"
                    >
                      <IconsUserIcon class="w-4 h-4 text-primary-500" />
                      پوشاک و مد
                    </h4>
                    <ul class="space-y-3">
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          زارا (Zara)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-400 rounded-full"
                          ></span>
                          اچ‌اند‌ام (H&M)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-300 rounded-full"
                          ></span>
                          گپ (Gap)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-600 rounded-full"
                          ></span>
                          نایک (Nike)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-700 rounded-full"
                          ></span>
                          آدیداس (Adidas)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-800 rounded-full"
                          ></span>
                          پوما (Puma)
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="space-y-4">
                    <h4
                      class="font-black text-sm mb-4 dark:text-white flex items-center gap-2"
                    >
                      <IconsHomeIcon class="w-4 h-4 text-primary-500" />
                      لوازم خانگی
                    </h4>
                    <ul class="space-y-3">
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          بوش (Bosch)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-400 rounded-full"
                          ></span>
                          سامسونگ خانگی
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-300 rounded-full"
                          ></span>
                          ال‌جی خانگی
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-600 rounded-full"
                          ></span>
                          پاناسونیک (Panasonic)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-700 rounded-full"
                          ></span>
                          فیلیپس (Philips)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-800 rounded-full"
                          ></span>
                          کنوود (Kenwood)
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="space-y-4">
                    <h4
                      class="font-black text-sm mb-4 dark:text-white flex items-center gap-2"
                    >
                      <IconsFaceSmileIcon class="w-4 h-4 text-primary-500" />
                      زیبایی و سلامت
                    </h4>
                    <ul class="space-y-3">
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          لورآل (L'Oréal)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-400 rounded-full"
                          ></span>
                          شنل (Chanel)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-300 rounded-full"
                          ></span>
                          دیور (Dior)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-600 rounded-full"
                          ></span>
                          نیوآ (Nivea)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          گرن (Garnier)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-400 rounded-full"
                          ></span>
                          وازلین (Vaseline)
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="space-y-4">
                    <h4
                      class="font-black text-sm mb-4 dark:text-white flex items-center gap-2"
                    >
                      <IconsLightBulbIcon class="w-4 h-4 text-primary-500" />
                      ورزشی
                    </h4>
                    <ul class="space-y-3">
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-600 rounded-full"
                          ></span>
                          نایک (Nike)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-700 rounded-full"
                          ></span>
                          آدیداس (Adidas)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-800 rounded-full"
                          ></span>
                          پوما (Puma)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          ریبوک (Reebok)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-600 rounded-full"
                          ></span>
                          آندر آرمور (Under Armour)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-700 rounded-full"
                          ></span>
                          اسکچرز (Skechers)
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="space-y-4">
                    <h4
                      class="font-black text-sm mb-4 dark:text-white flex items-center gap-2"
                    >
                      <IconsGlobeAltIcon class="w-4 h-4 text-primary-500" />
                      برندهای ایرانی
                    </h4>
                    <ul class="space-y-3">
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          ایران خودرو
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-400 rounded-full"
                          ></span>
                          سایپا
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-300 rounded-full"
                          ></span>
                          پارس خودرو
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-600 rounded-full"
                          ></span>
                          شاتل
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-500 rounded-full"
                          ></span>
                          صانع (موبایل)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                        >
                          <span
                            class="w-2 h-2 bg-primary-600 rounded-full"
                          ></span>
                          مارال (لوازم خانگی)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-span-2">
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <div
                      class="relative overflow-hidden rounded-2xl h-40 group/img"
                    >
                      <a href="">
                        <img
                          src="/assets/images/banner/banner-four-3.jpg"
                          class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                        />
                      </a>
                    </div>

                    <div
                      class="relative overflow-hidden rounded-2xl h-40 group/img"
                    >
                      <a href="">
                        <img
                          src="/assets/images/banner/banner-11.jpg"
                          class="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                        />
                      </a>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <h4 class="font-black text-sm mb-4 dark:text-white">
                      برندهای ویژه امروز
                    </h4>
                    <div class="grid grid-cols-2 gap-3">
                      <a
                        href="#"
                        class="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group/item"
                      >
                        <div
                          class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center"
                        >
                          <span
                            class="text-primary-600 dark:text-primary-400 font-bold text-sm"
                            >AP</span
                          >
                        </div>
                        <div>
                          <span
                            class="text-xs font-semibold dark:text-white group-hover/item:text-primary-500"
                            >اپل</span
                          >
                          <p class="text-xs text-gray-500">تا ۳۰٪ تخفیف</p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group/item"
                      >
                        <div
                          class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center"
                        >
                          <span
                            class="text-primary-600 dark:text-primary-400 font-bold text-sm"
                            >SA</span
                          >
                        </div>
                        <div>
                          <span
                            class="text-xs font-semibold dark:text-white group-hover/item:text-primary-500"
                            >سامسونگ</span
                          >
                          <p class="text-xs text-gray-500">هدیه خرید</p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group/item"
                      >
                        <div
                          class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center"
                        >
                          <span
                            class="text-primary-600 dark:text-primary-400 font-bold text-sm"
                            >NI</span
                          >
                        </div>
                        <div>
                          <span
                            class="text-xs font-semibold dark:text-white group-hover/item:text-primary-500"
                            >نایک</span
                          >
                          <p class="text-xs text-gray-500">حراج ویژه</p>
                        </div>
                      </a>

                      <a
                        href="#"
                        class="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group/item"
                      >
                        <div
                          class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center"
                        >
                          <span
                            class="text-primary-600 dark:text-primary-400 font-bold text-sm"
                            >LO</span
                          >
                        </div>
                        <div>
                          <span
                            class="text-xs font-semibold dark:text-white group-hover/item:text-primary-500"
                            >لورآل</span
                          >
                          <p class="text-xs text-gray-500">کادو رایگان</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div
                    class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800"
                  >
                    <h4 class="font-black text-sm mb-4 dark:text-white">
                      دسته‌بندی‌های برتر
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      <a
                        href="#"
                        class="px-3 py-1.5 text-xs rounded-full border border-gray-300 dark:text-white dark:border-gray-700 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 transition-all"
                      >
                        گوشی‌های هوشمند
                      </a>
                      <a
                        href="#"
                        class="px-3 py-1.5 text-xs rounded-full border border-gray-300 dark:text-white dark:border-gray-700 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 transition-all"
                      >
                        لپ‌تاپ‌های گیمینگ
                      </a>
                      <a
                        href="#"
                        class="px-3 py-1.5 text-xs rounded-full border border-gray-300 dark:text-white dark:border-gray-700 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 transition-all"
                      >
                        لباس ورزشی
                      </a>
                      <a
                        href="#"
                        class="px-3 py-1.5 text-xs rounded-full border border-gray-300 dark:text-white dark:border-gray-700 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 transition-all"
                      >
                        لوازم آرایشی
                      </a>
                      <a
                        href="#"
                        class="px-3 py-1.5 text-xs rounded-full border border-gray-300 dark:text-white dark:border-gray-700 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 transition-all"
                      >
                        اسباب‌بازی
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-6">
                    <a
                      href="#"
                      class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                    >
                      <IconsBoltIcon class="w-4 h-4" />
                      پرطرفدارترین‌ها
                    </a>
                    <a
                      href="#"
                      class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                    >
                      <IconsClockIcon class="w-4 h-4" />
                      جدیدترین برندها
                    </a>
                    <a
                      href="#"
                      class="text-xs text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                    >
                      <IconsChartBarIcon class="w-4 h-4" />
                      پرفروش‌ترین‌ها
                    </a>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors flex items-center gap-1"
                  >
                    مشاهده همه برندها
                    <IconsArrowLongLeftIcon class="w-4 h-4 rotate-180" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="relative group/drop">
          <button
            class="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-4 w-full lg:w-auto"
          >
            منوی آبشاری
            <IconsChevronDownIcon
              class="w-4 h-4 transition-transform group-hover/drop:rotate-180"
            />
          </button>

          <ul
            class="lg:absolute lg:top-full lg:right-0 w-full lg:w-64 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl lg:rounded-2xl py-2 opacity-0 invisible group-hover/drop:opacity-100 group-hover/drop:visible lg:transform lg:translate-y-2 lg:group-hover/drop:translate-y-0 transition-all duration-300 z-50 hidden lg:block mobile-menu-content"
          >
            <li class="relative p-2 group/subdrop">
              <a
                href="#"
                class="flex rounded items-center justify-between px-4 py-3 text-xs text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors"
              >
                <span class="flex items-center gap-3">
                  <IconsClipboardIcon class="w-4 h-4" />
                  واحد پشتیبانی
                </span>
                <IconsChevronLeftBoldIcon class="w-3 h-3 lg:block hidden" />
              </a>

              <ul
                class="lg:absolute lg:right-full lg:top-0 w-full lg:w-56 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl lg:rounded-2xl py-2 opacity-0 invisible group-hover/subdrop:opacity-100 group-hover/subdrop:visible lg:transform lg:translate-x-2 lg:group-hover/subdrop:translate-x-0 transition-all duration-300 hidden lg:block"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-[11px] hover:text-primary-500 dark:text-gray-400"
                    >تماس با اپراتور</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-[11px] hover:text-primary-500 dark:text-gray-400"
                    >ارسال تیکت</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-[11px] hover:text-primary-500 dark:text-gray-400"
                    >چت آنلاین</a
                  >
                </li>
              </ul>
            </li>
            <li class="p-2">
              <a
                href="#"
                class="flex rounded items-center gap-3 px-4 py-3 text-xs text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors"
              >
                <IconsQuestionMarkCircleIcon class="w-4 h-4" />
                سوالات متداول
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="#"
            class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1 transition-colors group"
          >
            <span
              class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse group-hover:scale-125 transition-transform"
            ></span>
            شگفت‌انگیزها
          </a>
        </li>

        <li>
          <a
            href="#"
            class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >پرفروش‌ترین‌ها</a
          >
        </li>

        <li>
          <a
            href="#"
            class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >وبلاگ</a
          >
        </li>

        <li class="mr-auto flex items-center gap-4">
          <div class="h-4 w-[1px] bg-gray-200 dark:bg-gray-800"></div>

          <a
            href="#"
            class="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <IconsMapPinIcon class="w-4 h-4 text-secondary-500" />
            ارسال به:
            <span class="text-gray-800 dark:text-gray-200"
              >تهران، سعادت‌آباد</span
            >
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

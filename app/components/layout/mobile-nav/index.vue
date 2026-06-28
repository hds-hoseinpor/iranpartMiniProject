<script setup lang="ts">
const route = useRoute();

const isHomeActive = computed(() => route.path === "/");
</script>

<template>
  <div
    class="fixed bottom-6 left-1/2 z-[100] w-[92%] max-w-[400px] -translate-x-1/2 md:hidden"
  >
    <div
      class="relative rounded-[2.5rem] border border-gray-200/50 bg-white/70 px-2 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl dark:border-white/10 dark:bg-black/60"
    >
      <ul class="relative flex items-center justify-around">
        <li class="relative">
          <NuxtLink
            to="/"
            class="group relative flex flex-col items-center gap-1 px-4 py-1"
            :class="
              isHomeActive
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-400 dark:text-gray-500'
            "
          >
            <div
              v-if="isHomeActive"
              class="absolute -top-3 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]"
            />

            <svg
              class="h-6 w-6 transition-transform group-active:scale-90"
              :class="isHomeActive ? 'text-blue-600 dark:text-blue-400' : ''"
              :fill="isHomeActive ? 'currentColor' : 'none'"
              :stroke="isHomeActive ? 'none' : 'currentColor'"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                v-if="isHomeActive"
                d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span
              class="text-[10px] font-black"
              :class="
                isHomeActive ? 'text-blue-600 dark:text-blue-400' : ''
              "
            >
              خانه
            </span>
          </NuxtLink>
        </li>

        <li>
          <a
            href="#"
            class="group flex flex-col items-center gap-1 px-4 py-1 text-gray-400 dark:text-gray-500"
          >
            <IconsMenuLinesIcon
              class="h-6 w-6 transition-transform group-active:scale-90"
            />
            <span class="text-[10px] font-black">دسته‌ها</span>
          </a>
        </li>

        <li class="-mt-12">
          <a
            href="#"
            class="group relative flex h-16 w-16 items-center justify-center rounded-[1.8rem] border-4 border-[#fafbfc] bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,0.5)] transition-transform hover:scale-110 active:scale-95 dark:border-[#050505]"
          >
            <IconsShoppingBagIcon class="h-7 w-7" />
            <span
              class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-600 bg-red-500 text-[9px] font-black"
            >
              ۳
            </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="group flex flex-col items-center gap-1 px-4 py-1 text-gray-400 dark:text-gray-500"
          >
            <svg
              class="h-6 w-6 transition-transform group-active:scale-90"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span class="text-[10px] font-black">علاقه‌مندی</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="group flex flex-col items-center gap-1 px-4 py-1 text-gray-400 dark:text-gray-500"
          >
            <IconsUserIcon class="h-6 w-6 transition-transform group-active:scale-90" />
            <span class="text-[10px] font-black">پروفایل</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

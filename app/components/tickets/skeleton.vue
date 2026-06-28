<template>
  <div class="animate-pulse" aria-hidden="true">
    <div class="border-b border-gray-100 p-6 dark:border-white/5">
      <div class="flex gap-6">
        <div class="h-3 w-1/4 rounded bg-gray-200 dark:bg-white/10" />
        <div class="h-3 w-1/6 rounded bg-gray-200 dark:bg-white/10" />
        <div class="h-3 w-1/6 rounded bg-gray-200 dark:bg-white/10" />
        <div class="h-3 w-1/5 rounded bg-gray-200 dark:bg-white/10" />
      </div>
    </div>
    <div
      v-for="i in 5"
      :key="i"
      class="flex gap-6 border-b border-gray-50 p-6 dark:border-white/5"
    >
      <div class="w-1/4 space-y-2">
        <div class="h-2.5 w-16 rounded bg-gray-200 dark:bg-white/10" />
        <div class="h-3 w-full rounded bg-gray-200 dark:bg-white/10" />
      </div>
      <div class="h-3 w-1/6 rounded bg-gray-200 dark:bg-white/10" />
      <div class="h-6 w-24 rounded-xl bg-gray-200 dark:bg-white/10" />
      <div class="h-3 w-1/5 rounded bg-gray-200 dark:bg-white/10" />
    </div>
  </div>
</template>

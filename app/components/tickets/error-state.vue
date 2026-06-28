<script setup lang="ts">
defineProps<{
  message: string;
}>();

const emit = defineEmits<{
  retry: [];
}>();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center px-6 py-16 text-center"
    role="alert"
  >
    <div
      class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 dark:bg-red-500/10"
    >
      <IconsExclamationCircleIcon class="h-8 w-8 text-red-500" />
    </div>
    <h2 class="text-sm font-black text-gray-800 dark:text-white">
      خطا در دریافت اطلاعات
    </h2>
    <p class="mt-2 max-w-sm text-[11px] font-bold text-gray-400">
      {{ message }}
    </p>
    <button
      type="button"
      class="mt-6 rounded-xl bg-primary-500 px-6 py-2.5 text-[11px] font-black text-white transition-all hover:bg-primary-600"
      @click="emit('retry')"
    >
      تلاش مجدد
    </button>
  </div>
</template>

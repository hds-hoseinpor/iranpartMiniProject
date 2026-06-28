<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<template>
  <div class="relative w-full md:w-64">
    <label for="ticket-search" class="sr-only">جستجو در تیکت‌ها</label>
    <input
      id="ticket-search"
      type="text"
      :value="modelValue"
      placeholder="جستجو در تیکت‌ها..."
      autocomplete="off"
      class="w-full rounded-2xl border border-white/60 bg-white/40 px-5 py-3 text-[11px] font-bold text-gray-800 outline-none transition-all placeholder:text-gray-500 focus:border-primary-500/50 dark:border-white/10 dark:bg-white/5 dark:text-gray-100 dark:placeholder:text-gray-400"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <IconsSearchIcon
      class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
    />
  </div>
</template>

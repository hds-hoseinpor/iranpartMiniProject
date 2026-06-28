<script setup lang="ts">
const props = defineProps<{
  page: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  "update:page": [page: number];
}>();

const visiblePages = computed(() => {
  const pages: number[] = [];
  const maxVisible = 5;
  const total = Math.max(props.totalPages, 1);

  let start = Math.max(1, props.page - Math.floor(maxVisible / 2));
  const end = Math.min(total, start + maxVisible - 1);

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const canGoPrev = computed(() => props.page > 1);
const canGoNext = computed(
  () => props.totalPages > 0 && props.page < props.totalPages,
);
</script>

<template>
  <div
    class="p-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-center gap-2"
  >
    <button
      type="button"
      class="w-8 h-8 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-400 hover:bg-primary-500 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      :disabled="!canGoPrev"
      aria-label="صفحه قبل"
      @click="emit('update:page', page - 1)"
    >
      <IconsChevronRightIcon class="w-4 h-4" />
    </button>

    <button
      v-for="pageNumber in visiblePages"
      :key="pageNumber"
      type="button"
      class="w-8 h-8 rounded-xl text-[10px] font-black transition-all"
      :class="
        pageNumber === page
          ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
          : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
      "
      :aria-label="`صفحه ${pageNumber}`"
      :aria-current="pageNumber === page ? 'page' : undefined"
      @click="emit('update:page', pageNumber)"
    >
      {{ pageNumber }}
    </button>

    <button
      type="button"
      class="w-8 h-8 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-400 hover:bg-primary-500 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      :disabled="!canGoNext"
      aria-label="صفحه بعد"
      @click="emit('update:page', page + 1)"
    >
      <IconsChevronLeftIcon class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { TICKET_STATUS_TABS } from "@/constants/ticketStatus";
import type { TicketStatus } from "@/types/ticket";

defineProps<{
  modelValue: TicketStatus | null;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: TicketStatus | null];
}>();
</script>

<template>
  <div
    class="flex items-center gap-2 bg-white/30 dark:bg-white/5 p-1.5 rounded-2xl border border-white/60 dark:border-white/10 flex-wrap"
    role="tablist"
    aria-label="فیلتر وضعیت تیکت"
  >
    <button
      v-for="tab in TICKET_STATUS_TABS"
      :key="tab.label"
      type="button"
      role="tab"
      :aria-selected="modelValue === tab.value"
      class="px-5 py-2 text-[10px] font-black transition-all"
      :class="
        modelValue === tab.value
          ? 'bg-white dark:bg-white/10 text-primary-500 rounded-xl shadow-sm'
          : 'text-gray-500 hover:text-primary-500'
      "
      @click="emit('update:modelValue', tab.value)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

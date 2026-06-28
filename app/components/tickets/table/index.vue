<script setup lang="ts">
import type { Ticket } from "@/types/ticket";

defineProps<{
  tickets: Ticket[];
}>();
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full text-right border-collapse">
      <thead>
        <tr
          class="border-b border-gray-100 dark:border-white/5 text-[10px] font-black text-gray-400 uppercase"
        >
          <th class="p-6">شناسه / موضوع تیکت</th>
          <th class="p-6">دپارتمان</th>
          <th class="p-6">وضعیت</th>
          <th class="p-6 text-left">آخرین بروزرسانی</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50 dark:divide-white/5">
        <TicketsTableRow
          v-for="ticket in tickets"
          :key="ticket.id"
          :ticket="ticket"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Ticket } from "@/types/ticket";

defineProps<{
  ticket: Ticket;
}>();

function formatDate(ticket: Ticket): string {
  const modified = ticket.persianModifiedDateTime;
  if (modified && modified !== "ثبت نشده") {
    return modified;
  }

  return ticket.persianCreateDate;
}
</script>

<template>
  <tr
    class="group hover:bg-primary-500/[0.02] transition-colors cursor-pointer"
  >
    <td class="p-6">
      <div class="flex flex-col gap-1">
        <span class="text-[10px] font-bold text-primary-500 tabular-nums"
          >#TK-{{ ticket.id }}</span
        >
        <span
          class="text-xs font-black text-gray-800 dark:text-white group-hover:text-primary-500 transition-colors"
          >{{ ticket.title }}</span
        >
      </div>
    </td>
    <td class="p-6">
      <span class="text-[11px] font-bold text-gray-500 dark:text-gray-400">{{
        ticket.departmentTitle
      }}</span>
    </td>
    <td class="p-6">
      <TicketsStatusBadge
        :status="ticket.fkStatusId"
        :label="ticket.statusTitle"
      />
    </td>
    <td class="p-6 text-left">
      <div class="flex flex-col items-end gap-1">
        <span class="text-[10px] font-bold text-gray-400 tabular-nums">{{
          formatDate(ticket)
        }}</span>
        <button
          type="button"
          class="text-[9px] font-black text-primary-500 bg-primary-500/10 px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
        >
          مشاهده گفتگو
        </button>
      </div>
    </td>
  </tr>
</template>

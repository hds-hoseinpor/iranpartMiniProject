<script setup lang="ts">
import { TicketStatus } from "@/types/ticket";
import { TICKET_STATUS_LABELS } from "@/constants/ticketStatus";

const props = defineProps<{
  status: TicketStatus;
  label?: string;
}>();

const statusConfig: Record<TicketStatus, { dot: string; text: string }> = {
  [TicketStatus.WaitingForReply]: {
    dot: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]",
    text: "text-amber-600 dark:text-amber-400",
  },
  [TicketStatus.UnderReview]: {
    dot: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]",
    text: "text-blue-600 dark:text-blue-400",
  },
  [TicketStatus.Answered]: {
    dot: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  [TicketStatus.Closed]: {
    dot: "bg-gray-400 shadow-[0_0_8px_rgba(156,163,175,0.5)]",
    text: "text-gray-600 dark:text-gray-400",
  },
};

const config = computed(
  () => statusConfig[props.status] ?? statusConfig[TicketStatus.Closed],
);
const displayLabel = computed(
  () => props.label ?? TICKET_STATUS_LABELS[props.status] ?? "نامشخص",
);
</script>

<template>
  <div
    class="flex items-center gap-2"
    role="status"
    :aria-label="`وضعیت: ${displayLabel}`"
  >
    <span class="w-2 h-2 rounded-full" :class="config.dot" aria-hidden="true" />
    <span class="text-[11px] font-black" :class="config.text">{{
      displayLabel
    }}</span>
  </div>
</template>

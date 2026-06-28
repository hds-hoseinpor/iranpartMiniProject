<script setup lang="ts">
const {
  tickets,
  totalPages,
  page,
  search,
  status,
  loading,
  error,
  loadTickets,
  setPage,
  setStatus,
} = useTickets();
</script>

<template>
  <div class="space-y-6" dir="rtl">
    <TicketsHeader />

    <div class="flex flex-wrap items-center justify-between gap-4 px-2">
      <TicketsStatusFilter
        :model-value="status"
        @update:model-value="setStatus"
      />
      <TicketsSearch v-model="search" />
    </div>

    <div
      class="overflow-hidden bg-white/40 dark:bg-gray-950/60 backdrop-blur-3xl border border-white/60 dark:border-white/10 rounded-[2.5rem] shadow-sm"
    >
      <TicketsSkeleton v-if="loading" />

      <TicketsErrorState
        v-else-if="error"
        :message="error"
        @retry="loadTickets"
      />

      <TicketsEmptyState v-else-if="tickets.length === 0" />

      <template v-else>
        <TicketsTable :tickets="tickets" />
        <TicketsPagination
          v-if="totalPages > 1"
          :page="page"
          :total-pages="totalPages"
          @update:page="setPage"
        />
      </template>
    </div>
  </div>
</template>

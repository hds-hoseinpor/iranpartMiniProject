<template>
  <div
    class="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-8 shadow-sm backdrop-blur-3xl dark:border-white/10 dark:bg-gray-950/60"
  >
    <div
      class="absolute -left-24 -top-24 h-48 w-48 rounded-full bg-primary-500/10 blur-3xl"
      aria-hidden="true"
    />

    <div
      class="relative flex flex-col items-center justify-between gap-6 md:flex-row"
    >
      <div class="flex items-center gap-5">
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary-500/20 bg-primary-500/10 text-primary-500"
        >
          <IconsChatBubbleIcon class="size-7" />
        </div>
        <div>
          <h1 class="text-base font-black text-gray-900 dark:text-white">
            تیکت‌های پشتیبانی
          </h1>
          <p
            class="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-400"
          >
            Support Tickets & Inquiry History
          </p>
        </div>
      </div>

      <button
        type="button"
        class="flex items-center gap-2 rounded-2xl bg-primary-500 px-8 py-4 text-[11px] font-black text-white shadow-xl shadow-primary-500/30 transition-all hover:scale-[1.02] active:scale-95"
      >
        <IconsPlusIcon class="h-4 w-4" />
        ثبت تیکت جدید
      </button>
    </div>
  </div>
</template>

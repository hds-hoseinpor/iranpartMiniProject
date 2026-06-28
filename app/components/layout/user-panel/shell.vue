<script setup lang="ts">
const { isOpen, toggleFilters } = usePanelSidebar();
</script>

<template>
  <section class="container mx-auto py-10 px-4" dir="rtl">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Sidebar -->
      <aside class="w-full lg:block hidden lg:w-80 flex-shrink-0" dir="rtl">
        <LayoutUserPanelSidebarContent />
      </aside>

      <!-- Sidebar Showing in Responsive Break Point -->
      <!-- Open Sidebar button on mobile -->
      <div class="fixed bottom-28 right-6 z-[95] lg:hidden">
        <button
          type="button"
          class="flex items-center justify-center w-14 h-14 bg-white/40 dark:bg-white/[0.05] backdrop-blur-2xl text-blue-600 rounded-2xl shadow-xl border border-white/60 dark:border-white/10 active:scale-90 transition-all"
          @click="toggleFilters(true)"
        >
          <IconsMenuIcon class="size-6" />
        </button>
      </div>

      <!-- Overlay for mobile Sidebar -->
      <div
        id="filter-overlay"
        class="fixed inset-0 bg-black/30 backdrop-blur-sm z-[140] transition-opacity duration-300 lg:hidden"
        :class="
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        "
        @click="toggleFilters(false)"
      />

      <!-- Offcanvas Sidebar for Mobile -->
      <div
        id="filter-offcanvas"
        class="fixed top-0 right-0 h-full w-[85%] max-w-[380px] bg-white/30 dark:bg-black/40 backdrop-blur-[30px] z-[150] transition-transform duration-500 ease-in-out border-l border-white/40 dark:border-white/10 shadow-2xl lg:hidden"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="flex flex-col h-full">
          <div
            class="p-6 flex items-center justify-between border-b border-white/40 dark:border-white/5 bg-white/20 dark:bg-white/[0.02]"
          >
            <h2 class="text-lg font-black text-gray-900 dark:text-white">
              پنل کاربری
            </h2>
            <button
              type="button"
              class="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/40 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-white/60 dark:border-white/10"
              @click="toggleFilters(false)"
            >
              <IconsCloseIcon class="w-5 h-5" />
            </button>
          </div>

          <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            <LayoutUserPanelSidebarContent />
          </div>
        </div>
      </div>

      <main class="flex-1 space-y-8">
        <slot />
      </main>
    </div>
  </section>
</template>

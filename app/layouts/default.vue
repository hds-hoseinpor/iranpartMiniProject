<template>
  <div
    class="bg-[#fcfdfe] dark:bg-[#050505] min-h-screen transition-colors duration-700 selection:bg-blue-500/30 selection:text-blue-600 overflow-x-hidden"
  >
    <LayoutNeonLight />
    <LayoutHeader />

    <main class="space-y-12 pb-28 md:pb-0">
      <LayoutUserPanelShell>
        <slot />
      </LayoutUserPanelShell>
      <LayoutShopFeatures />
    </main>

    <LayoutFooter />

    <LayoutMobileNav />
  </div>
</template>

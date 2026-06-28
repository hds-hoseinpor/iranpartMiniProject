<template>
  <div
    class="pointer-events-none fixed inset-0 -z-[60] overflow-hidden bg-[#fafbfc] dark:bg-[#030303]"
  >
    <div
      class="absolute -left-[10%] -top-[15%] h-[70%] w-[70%] animate-pulse rounded-full bg-indigo-500/30 blur-[150px] dark:bg-indigo-600/[0.15]"
      style="animation-duration: 8s"
    />
    <div
      class="absolute -bottom-[15%] -right-[10%] h-[70%] w-[70%] animate-pulse rounded-full bg-blue-500/30 blur-[150px] dark:bg-blue-600/[0.18]"
      style="animation-duration: 10s"
    />
    <div
      class="absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.03] blur-[120px] dark:bg-blue-500/[0.05]"
    />
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply dark:opacity-[0.06] dark:mix-blend-soft-light"
      style="
        background-image: url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E');
      "
    />
  </div>
</template>

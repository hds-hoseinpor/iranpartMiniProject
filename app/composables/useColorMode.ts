export function useColorMode() {
  const isDark = useState("color-mode-dark", () => true);

  function apply(mode: boolean) {
    if (import.meta.client) {
      document.documentElement.classList.toggle("dark", mode);
    }
  }

  function toggle() {
    isDark.value = !isDark.value;
    apply(isDark.value);
  }

  onMounted(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (document.documentElement.classList.contains("dark")) {
      isDark.value = true;
    } else if (
      prefersDark &&
      !document.documentElement.classList.contains("dark")
    ) {
      // keep light by default unless user toggled
    }
  });

  return {
    isDark,
    toggle,
  };
}

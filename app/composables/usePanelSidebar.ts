export function usePanelSidebar() {
  const isOpen = useState("panel-sidebar-open", () => false);

  function toggleFilters(open: boolean) {
    isOpen.value = open;
  }

  return {
    isOpen,
    toggleFilters,
  };
}

export function useSubmenuToggle() {
  const isOpen = ref(false);

  function toggleSubmenu() {
    isOpen.value = !isOpen.value;
  }

  return {
    isOpen,
    toggleSubmenu,
  };
}

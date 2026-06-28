import { debounce } from "@/utils/debounce";
import { DEFAULT_PER_PAGE } from "@/constants/ticketStatus";
import { fetchUserTickets } from "@/services/ticket";
import type {
  Ticket,
  TicketListData,
  TicketLoadOptions,
  TicketStatus,
} from "@/types/ticket";

function parsePositiveInt(value: unknown, fallback: number): number {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function parseStatus(value: unknown): TicketStatus | null {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) ? (parsed as TicketStatus) : null;
}

export function useTickets() {
  const route = useRoute();
  const router = useRouter();

  const page = ref(parsePositiveInt(route.query.page, 1));
  const perPage = ref(parsePositiveInt(route.query.perPage, DEFAULT_PER_PAGE));
  const search = ref(String(route.query.search ?? ""));
  const status = ref<TicketStatus | null>(parseStatus(route.query.status));

  const tickets = ref<Ticket[]>([]);
  const totalPages = ref(0);
  const total = ref(0);

  const loadOptions = computed<TicketLoadOptions>(() => ({
    Page: page.value,
    PerPage: perPage.value,
    Search: search.value.trim() || undefined,
    Status: status.value ?? undefined,
  }));

  const {
    loading,
    error,
    execute: loadTickets,
  } = useRequest<TicketListData>({
    defaultErrorMessage: "خطا در دریافت تیکت‌ها",
    requestFn: async (signal) => {
      const response = await fetchUserTickets(loadOptions.value, { signal });

      if (!response.isSuccess) {
        throw new Error(
          response.message || response.customMessage || "خطا در دریافت تیکت‌ها",
        );
      }

      return response.data;
    },
    onSuccess(data) {
      tickets.value = data.items;
      totalPages.value = data.totalPages;
      total.value = data.total;
      page.value = data.page;
      perPage.value = data.perPage;
    },
    onError() {
      tickets.value = [];
      totalPages.value = 0;
      total.value = 0;
    },
  });

  function syncQueryToRoute() {
    const query: Record<string, string> = {};

    if (page.value > 1) {
      query.page = String(page.value);
    }

    if (perPage.value !== DEFAULT_PER_PAGE) {
      query.perPage = String(perPage.value);
    }

    if (search.value.trim()) {
      query.search = search.value.trim();
    }

    if (status.value !== null) {
      query.status = String(status.value);
    }

    router.replace({ query });
  }

  function setPage(nextPage: number) {
    if (nextPage < 1 || (totalPages.value > 0 && nextPage > totalPages.value)) {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    page.value = nextPage;
  }

  function setStatus(nextStatus: TicketStatus | null) {
    status.value = nextStatus;
    page.value = 1;
  }

  const debouncedSyncAndLoad = debounce(() => {
    syncQueryToRoute();
    loadTickets();
  }, 400);

  watch(
    [page, perPage, status],
    () => {
      syncQueryToRoute();
      loadTickets();
    },
    { immediate: true },
  );

  watch(search, () => {
    if (page.value !== 1) {
      page.value = 1;
    }

    debouncedSyncAndLoad();
  });

  return {
    tickets,
    total,
    totalPages,
    page,
    perPage,
    search,
    status,
    loading,
    error,
    loadTickets,
    setPage,
    setStatus,
  };
}

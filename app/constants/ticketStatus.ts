import { TicketStatus, type StatusTab } from "@/types/ticket";

export const TICKET_STATUS_TABS: StatusTab[] = [
  { label: "همه", value: null },
  { label: "در انتظار پاسخ", value: TicketStatus.WaitingForReply },
  { label: "در حال بررسی", value: TicketStatus.UnderReview },
  { label: "پاسخ داده شده", value: TicketStatus.Answered },
  { label: "بسته شده", value: TicketStatus.Closed },
];

export const TICKET_STATUS_LABELS: Record<TicketStatus, string> =
  Object.fromEntries(
    TICKET_STATUS_TABS.map((tab) => [tab.value, tab.label]),
  ) as Record<TicketStatus, string>;

export const DEFAULT_PER_PAGE = 20;

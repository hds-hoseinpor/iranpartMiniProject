import type { TicketStatus } from "./status";

export interface StatusTab {
  label: string;
  value: TicketStatus | null;
}

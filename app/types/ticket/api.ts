import type { Ticket } from "./entity";
import type { TicketStatus } from "./status";

export interface TicketLoadOptions {
  Page: number;
  PerPage: number;
  Search?: string;
  Id?: number;
  Status?: TicketStatus;
}

export interface TicketListData {
  items: Ticket[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface TicketListResponse {
  code: number;
  isSuccess: boolean;
  data: TicketListData;
  message: string;
  customMessage: string;
  errors: unknown;
  traceId: string | null;
}

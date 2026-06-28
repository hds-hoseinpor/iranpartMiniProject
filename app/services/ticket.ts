import type { TicketListResponse, TicketLoadOptions } from "@/types/ticket";
import { useApiClient, type ApiRequestOptions } from "@/utils/http";

export function buildTicketQueryParams(
  options: TicketLoadOptions,
): Record<string, string> {
  const params: Record<string, string> = {
    Page: String(options.Page),
    PerPage: String(options.PerPage),
  };

  if (options.Search?.trim()) {
    params.Search = options.Search.trim();
  }

  if (options.Id !== undefined) {
    params.Id = String(options.Id);
  }

  if (options.Status !== undefined) {
    params.Status = String(options.Status);
  }

  return params;
}

export async function fetchUserTickets(
  options: TicketLoadOptions,
  requestOptions?: Pick<ApiRequestOptions, "signal">,
): Promise<TicketListResponse> {
  const api = useApiClient();
  const params = buildTicketQueryParams(options);

  return api<TicketListResponse>("/Ticket/user-tickets", {
    params,
    ...requestOptions,
  });
}

import type { TicketStatus } from "./status";

export interface Ticket {
  id: number;
  title: string;
  fkDepartmentId: number;
  departmentTitle: string;
  fkStatusId: TicketStatus;
  statusTitle: string;
  fkOrderId: number;
  fkPriorityId: number;
  fkRegisterPersonId: number;
  description: string;
  isActive: boolean;
  isTrashed: boolean;
  createDateTime: string;
  persianCreateDate: string;
  modifiedDateTime: string;
  persianModifiedDateTime: string;
  messages: unknown[];
}

import {Status} from '../enums/Status';

export interface EventPayload {
  id?: string | null;
  creator?: string | null;
  title?: string | null;
  location?: string | null;
  description?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  ticketRequired?: boolean | null;
  ticketUrl?: string | null;
  status?: Status | null;
  rating?: number | null;
}

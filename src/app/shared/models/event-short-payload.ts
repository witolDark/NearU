import {Status} from '../enums/Status';

export interface EventShortPayload {
  title?: string | null;
  location?: string | null;
  description?: string | null;
  ticketRequired?: boolean | null;
  status?: Status | null;
  rating?: number | null;
}

import {Status} from '../enums/Status';

export interface EventPayload {
  _id: string;
  creator: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  ticketRequired: boolean;
  ticketUrl?: string;
  status: Status;
  __v?: number;
}

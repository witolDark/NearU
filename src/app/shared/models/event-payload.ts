import {Status} from '../enums/Status';
import {Category} from './category';

export interface EventPayload {
  id: string;
  creator: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  ticketRequired: boolean;
  rating?: number;
  numberOfRatings?: number;
  ticketUrl?: string;
  category: Category;
  status: Status;
}

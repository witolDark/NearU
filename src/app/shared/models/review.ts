import {EventPayload} from './event-payload';
import {UserPayload} from './user-payload';

export interface Review {
  event: EventPayload;
  user: UserPayload;
  text: string;
  rating: number;
  date: string;
}

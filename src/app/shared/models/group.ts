import {User} from './user-state-model';

export interface Group {
  id: string;
  eventId: string;
  userId: User;
  groupName: string;
  description: string;
}

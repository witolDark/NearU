import {UserStateModel} from './user-state-model';

export interface Group {
  id: string;
  eventId: string;
  userId: UserStateModel;
  groupName: string;
  description: string;
}

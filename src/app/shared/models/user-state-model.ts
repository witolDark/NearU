import {Role} from '../enums/Role';

export interface UserStateModel {
  id: string;
  email: string;
  name: string;
  role: Role;
  isAuthorized: boolean;
}

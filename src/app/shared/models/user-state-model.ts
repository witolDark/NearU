import {Role} from '../enums/Role';

export interface UserStateModel {
  email: string;
  name: string;
  role: Role;
  isAuthorized: boolean;
}

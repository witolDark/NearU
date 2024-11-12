import {Role} from '../enums/Role';

export interface UserStateModel {
  email?: string;
  login?: string;
  role?: Role;
  isAuthorized?: boolean;
}

import {Role} from '../enums/Role';

export interface UserPayload {
  _id: string;
  email: string;
  name: string;
  registerDate: string;
  role: Role;
  isActivated: boolean;
  isAuthorized: boolean;
}

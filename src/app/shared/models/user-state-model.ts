import {Role} from '../enums/Role';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  isAuthorized: boolean;
}

import {UserPayload} from './user-payload';

export interface LoginPayload {
  accessToken?: string;
  refreshToken?: string;
  user?: UserPayload
}

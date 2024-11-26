import {LoginPayload} from '../../models/login-payload';

export class SetAuthorization {
  static readonly type = '[user] login'

  constructor(public payload: LoginPayload) {
  }
}

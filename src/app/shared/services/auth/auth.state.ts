import {UserStateModel} from '../../models/user-state-model';
import {Injectable} from '@angular/core';
import {Action, Selector, State} from '@ngxs/store';
import {HttpClient} from '@angular/common/http';


@State<UserStateModel>({
  name: 'user',
  defaults: {
    email: undefined,
    login: undefined,
    role: undefined,
    isAuthorized: false
  }
})
@Injectable()
export class UserState {
  constructor(private http: HttpClient) {
  }

  @Selector()
  static user(state: UserStateModel): UserStateModel {
    return state;
  }
}


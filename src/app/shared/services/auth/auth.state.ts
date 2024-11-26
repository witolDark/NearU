import {UserStateModel} from '../../models/user-state-model';
import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {HttpClient} from '@angular/common/http';
import {SetAuthorization} from './auth.actions';
import {state} from '@angular/animations';
import {tap} from 'rxjs';
import {LoginPayload} from '../../models/login-payload';


@State<UserStateModel>({
  name: 'user',
  defaults: {
    email: undefined,
    name: undefined,
    role: undefined,
    isAuthorized: false
  }
})
@Injectable()
export class UserState {
  // constructor(private http: HttpClient) {
  // }
  //
  // registrationUrl = 'http://localhost:5000/api/';
  //
  // @Selector()
  // static user(state: UserStateModel): UserStateModel {
  //   return state;
  // }
  //
  // @Action(SetAuthorization)
  // setAuthorization({ patchState }: StateContext<UserStateModel>, { payload }: SetAuthorization) {
  //   return this.http.post(`${this.registrationUrl}/registration/${activationLink}`, {}).pipe(
  //     tap((payload: LoginPayload)=> {
  //
  //     })
  //   )
  //   patchState({
  //     email: payload.user?.email,
  //     name: payload.user?.name,
  //     role: payload.user?.role,
  //     isAuthorized: payload.user?.isAuthorized
  //   })
  // }
}


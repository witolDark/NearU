import {Injectable} from '@angular/core';
import {RegistrationPayload} from '../../models/registration-payload';
import {map, Observable, tap} from 'rxjs';
import {UserStateModel} from '../../models/user-state-model';
import {UserState} from './auth.state';
import {Select, Store} from '@ngxs/store';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // @Select(UserState.user)
  // public user$?: Observable<UserStateModel>;

  user: UserStateModel | undefined;

  registrationUrl = 'http://localhost:5000/api/';

  accessTokenKey: string = '';
  refreshTokenKey: string = '';

  isAuthorized = true;

  constructor(private http: HttpClient) {
  }

  register(registrationPayload: RegistrationPayload) {
    return this.http.post(`${this.registrationUrl}/registration`, registrationPayload).pipe(
      tap(res => console.log(res))
    );
  }

  activateAccount(activationLink: string) {
    return this.http.post(`${this.registrationUrl}/registration/${activationLink}`, {}).pipe(
      tap(res => )
    )
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  refreshToken(): Observable<string> {
    const refreshToken = localStorage.getItem(this.refreshTokenKey);
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    return this.http.post<{ accessToken: string }>(
      '/api/refresh-token',
      {refreshToken}
    ).pipe(
      map(response => response.accessToken)
    );
  }

  logout(): void {
    // localStorage.removeItem(this.accessTokenKey);
    // localStorage.removeItem(this.refreshTokenKey);
    window.location.href = 'auth/login';
  }

  changeCredentials(login: string | null | undefined, password: string | null | undefined) {
  }
}

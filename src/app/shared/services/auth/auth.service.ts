import {Injectable} from '@angular/core';
import {RegistrationPayload} from '../../models/registration-payload';
import {HttpClient} from '@angular/common/http';
import {map, Observable, of, tap} from 'rxjs';
import {FormControl, ɵValue} from '@angular/forms';
import {UserStateModel} from '../../models/user-state-model';
import {Role} from '../../enums/Role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: UserStateModel = {
    email: "witalikspelina@gmail.com",
    login: "Witold",
    role: Role.ADMIN,
    isAuthorized: true
  }

  registrationUrl = 'http://localhost:5000/api/registration'

  accessTokenKey: string = '';
  refreshTokenKey: string = '';

  isAuthorized = true;

  constructor(private http: HttpClient) {
  }

  register(registrationPayload: RegistrationPayload) {
    return this.http.post(this.registrationUrl, registrationPayload).pipe(
      tap(res => console.log(res))
    );
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
      { refreshToken }
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

import {Injectable} from '@angular/core';
import {RegistrationPayload} from '../../models/registration-payload';
import {tap} from 'rxjs';
import {UserStateModel} from '../../models/user-state-model';
import {HttpClient} from '@angular/common/http';
import {LoginPayload} from '../../models/login-payload';
import {Router} from '@angular/router';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: UserStateModel;

  apiUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient, private router: Router) {
    this.initAuthorization();
  }

  register(registrationPayload: RegistrationPayload) {
    return this.http.post(`${this.apiUrl}/registration`, registrationPayload).pipe(
      tap(() => {
        this.router.navigate(['/auth/login']);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<LoginPayload>(`${this.apiUrl}/login`, {email, password}).pipe(
      tap(res => {
        this.setAuthorization(res);
      })
    )
  }

  setAuthorization(res: LoginPayload) {
    localStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);

    this.user = {email: res.user.email, name: res.user.name, role: res.user.role, isAuthorized: true};
  }

  initAuthorization() {
    if (this.getAccessToken()) {
      this.user = {...jwtDecode<UserStateModel>(this.getAccessToken() as string), isAuthorized: true};
      console.log('redirect')
      this.router.navigate(['/main/events']);
    }
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = 'auth/login';
  }
}

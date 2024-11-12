import {Injectable} from '@angular/core';
import {RegistrationPayload} from '../models/registration-payload';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registrationUrl = 'http://localhost:5000/auth/register';

  constructor(private http: HttpClient) {
  }

  register(registrationPayload: RegistrationPayload) {
    this.http.post(this.registrationUrl, JSON.stringify(registrationPayload));
  }
}

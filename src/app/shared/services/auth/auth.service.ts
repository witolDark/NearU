import {Injectable} from '@angular/core';
import {RegistrationPayload} from '../../models/registration-payload';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';
import {FormControl, ɵValue} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registrationUrl = 'http://localhost:5000/api/registration'

  constructor(private http: HttpClient) {
  }

  register(registrationPayload: RegistrationPayload) {
    return this.http.post(this.registrationUrl, registrationPayload).pipe(
      tap(res => console.log(res))
    );
  }

  changeCredentials(login: string | null | undefined, password: string | null | undefined) {
  }
}

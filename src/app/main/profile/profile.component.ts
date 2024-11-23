import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private authService: AuthService) {
  }

  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('', Validators.minLength(8)),
    passwordConfirm: new FormControl('', Validators.minLength(8))
  })

  changeCredentials()  {
    if (this.form.valid && this.form.value.password === this.form.value.passwordConfirm) {
      this.authService.changeCredentials(this.form.value.login, this.form.value.password);
    }
  }
}

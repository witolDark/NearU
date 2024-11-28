import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  form = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('', Validators.minLength(8)),
    passwordConfirm: new FormControl('', Validators.minLength(8))
  })
}

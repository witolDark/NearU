import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {LoginPayload} from '../../shared/models/login-payload';
import {log} from 'node:util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/main/events']);
      },
      error: () => {
        console.error('Login failed');
        alert('Логін або пароль неправильні.');
      },
    });
  }

}

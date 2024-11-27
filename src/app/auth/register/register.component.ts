import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  onSubmit() {
    if (this.form.value.password === this.form.value.password_confirmation) {
      this.authService.register(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['/auth/confirmation']);
        },
        error: (error) => {
          if (error.status === 400) {
            console.error('Bad Request: Invalid data');
          } else if (error.status === 500) {
            console.error('Server Error: Please try again later');
          } else {
            console.error('Unexpected error:', error);
          }
        },
      });
    }
    else console.log('Паролі не збігаються');
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrl: './activation.component.scss'
})
export class ActivationComponent implements OnInit {
  activationStatus: 'loading' | 'success' | 'error' = 'loading';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.authService.activateAccount(token).subscribe(
        (response) => {
          console.log(response);
          this.activationStatus = 'success';
        },
        (error) => {
          console.error(error);
          this.activationStatus = 'error';
        }
      );
    } else {
      this.activationStatus = 'error';
    }
  }
}

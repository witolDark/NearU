import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-email-confirmed',
  templateUrl: './email-confirmed.component.html',
  styleUrl: './email-confirmed.component.scss'
})
export class EmailConfirmedComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  constructor(private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const fullUrl = this.route.snapshot.url.map(segment => segment.path).join('/');
    const activationLink = fullUrl.split('/').pop() || null;

    // @ts-ignore
    this.authService.activateAccount(activationLink).pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

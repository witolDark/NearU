import {Component} from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../shared/services/auth/auth.service';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {Role} from '../shared/enums/Role';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ProgressBarService} from '../shared/services/progress-bar.service';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FlexLayoutModule,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule,
    MatTooltip
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(protected router: Router, protected authService: AuthService, protected progressBarService: ProgressBarService) {
  }

  protected readonly Role = Role;
}

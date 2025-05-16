import {Component} from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../shared/services/auth/auth.service';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {Role} from '../shared/enums/Role';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FlexLayoutModule,
    RouterLink,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(protected router: Router, protected authService: AuthService) {}

  protected readonly Role = Role;
}

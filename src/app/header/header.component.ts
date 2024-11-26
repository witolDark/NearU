import {Component, OnInit} from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {AvatarModule} from 'primeng/avatar';
import {MenuItem, MenuItemCommandEvent} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {Button, ButtonDirective} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {Router} from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import {AuthService} from '../shared/services/auth/auth.service';
import {Role} from '../shared/enums/Role';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FlexLayoutModule,
    AvatarModule,
    MenuModule,
    Button,
    ButtonDirective,
    ToastModule,
    CalendarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] | undefined;

  constructor(protected router: Router, protected authService: AuthService) {
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Профіль',
        items: [
          {
            label: 'Мої події',
            icon: 'fa-solid fa-list',
            command: () => {
              this.router.navigate(['/main/my']);
            }
          },
          {
            label: 'Налаштування',
            icon: 'fa-solid fa-gear',
            command: () => {
              this.router.navigate(['/main/profile']);
            }
          },
          {
            label: 'Вийти',
            icon: 'fa-solid fa-arrow-right-from-bracket',
            command: () => {
              this.authService.logout();
            }
          }
        ]
      }
    ];

    if (this.authService.user?.role === Role.ADMIN) {
      this.menuItems.push({
        label: 'Адміністратор',
        items: [
          {
            label: 'Управління подіями',
            icon: 'fa-solid fa-lock',
            command: () => {
              this.router.navigate(['/main/admin']);
            }
          }
        ]
      });
    }
  }
}

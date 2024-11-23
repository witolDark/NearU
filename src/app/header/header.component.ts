import {Component, OnInit} from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {AvatarModule} from 'primeng/avatar';
import {MenuItem, MenuItemCommandEvent} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {Button, ButtonDirective} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {Router} from '@angular/router';
import {CalendarModule} from 'primeng/calendar';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Профіль',
        items: [
          {
            label: 'Налаштування',
            icon: 'fa-solid fa-gear',
            command: () => {
              this.router.navigate(['/main/profile']);
            }
          },
          {
            label: 'Вийти',
            icon: 'fa-solid fa-arrow-right-from-bracket'
          }
        ]
      }
    ];
  }
}

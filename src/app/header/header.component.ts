import {Component, OnInit} from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {AvatarModule} from 'primeng/avatar';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {Button, ButtonDirective} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FlexLayoutModule,
    AvatarModule,
    MenuModule,
    Button,
    ButtonDirective,
    ToastModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Профіль',
        items: [
          {
            label: 'Налаштування',
            icon: 'fa-solid fa-gear'
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

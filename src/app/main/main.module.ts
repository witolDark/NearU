import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {EventsComponent} from './events/events.component';
import {provideHttpClient} from '@angular/common/http';
import {MainRoutingModule} from './main-routing.module';
import {Button, ButtonDirective} from 'primeng/button';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {DividerModule} from "primeng/divider";


@NgModule({
  declarations: [
    ProfileComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    Button,
    FlexLayoutModule,
    ButtonDirective,
    DividerModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class MainModule {
}

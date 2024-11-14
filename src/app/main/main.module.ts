import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {EventsComponent} from './events/events.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EventsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule {
}

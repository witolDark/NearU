import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {EventsComponent} from './events/events.component';
import {provideHttpClient} from '@angular/common/http';
import {MainRoutingModule} from './main-routing.module';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {CreationDialogComponent} from './creation-dialog/creation-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DetailsComponent} from './details/details.component';
import {MyEventsComponent} from './my-events/my-events.component';
import {EventCardComponent} from './event-card/event-card.component';
import {AdminPanelComponent} from './admin/admin-panel.component';
import {NoEventsComponent} from './no-events/no-events.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDivider} from '@angular/material/divider';
import {MatLabel} from '@angular/material/form-field';


@NgModule({
  declarations: [
    ProfileComponent,
    EventsComponent,
    CreationDialogComponent,
    DetailsComponent,
    MyEventsComponent,
    EventCardComponent,
    AdminPanelComponent,
    NoEventsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDivider,
    MatLabel
  ],
  providers: [
    provideHttpClient()
  ]
})
export class MainModule {
}

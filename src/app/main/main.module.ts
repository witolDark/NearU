import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {EventsComponent} from './events/events.component';
import {provideHttpClient} from '@angular/common/http';
import {MainRoutingModule} from './main-routing.module';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DetailsComponent} from './details/details.component';
import {MyEventsComponent} from './my-events/my-events.component';
import {EventCardComponent} from './event-card/event-card.component';
import {AdminPanelComponent} from './admin/admin-panel.component';
import {NoEventsComponent} from './no-events/no-events.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDivider} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NewEventComponent} from './new-event/new-event.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MapComponent} from '../shared/map/map.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    ProfileComponent,
    EventsComponent,
    DetailsComponent,
    MyEventsComponent,
    EventCardComponent,
    AdminPanelComponent,
    NoEventsComponent,
    NewEventComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDivider,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MapComponent,
    MatDatepickerModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonToggleModule
  ],
  providers: [
    provideHttpClient(),
  ]
})
export class MainModule {
}

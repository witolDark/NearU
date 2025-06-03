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
import {MatSelectModule} from '@angular/material/select';
import {DiscussionCardComponent} from './details/discussion-card/discussion-card.component';
import { DiscussionDialogComponent } from './details/discussion-dialog/discussion-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DiscussionsComponent } from './discussions/discussions.component';
import { CommentComponent } from './discussions/comment/comment.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EventsComponent,
    DetailsComponent,
    MyEventsComponent,
    EventCardComponent,
    AdminPanelComponent,
    NoEventsComponent,
    NewEventComponent,
    DiscussionCardComponent,
    DiscussionDialogComponent,
    DiscussionsComponent,
    CommentComponent
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
    MatButtonToggleModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    provideHttpClient(),
  ]
})
export class MainModule {
}

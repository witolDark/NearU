import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events/events.component';
import {ProfileComponent} from './profile/profile.component';
import {DetailsComponent} from './details/details.component';
import {AdminPanelComponent} from './admin/admin-panel.component';
import {MyEventsComponent} from './my-events/my-events.component';
import {AuthGuard} from '../shared/services/auth/auth.guard';
import {AdminGuard} from '../shared/services/auth/admin.guard';
import {NewEventComponent} from './new-event/new-event.component';
import {DiscussionsComponent} from './discussions/discussions.component';

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'new', component: NewEventComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
  {path: 'my', component: MyEventsComponent, canActivate: [AuthGuard]},
  {path: 'discussion/:id', component: DiscussionsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

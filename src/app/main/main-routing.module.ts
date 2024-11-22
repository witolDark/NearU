import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsComponent} from './events/events.component';
import {CreationDialogComponent} from './creation-dialog/creation-dialog.component';

const routes: Routes = [
  {path: 'events', component: EventsComponent},
  {path: 'test', component: CreationDialogComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {EventsComponent} from './events/events.component';
import {provideHttpClient} from '@angular/common/http';
import {MainRoutingModule} from './main-routing.module';
import {Button, ButtonDirective} from 'primeng/button';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {DividerModule} from "primeng/divider";
import {CreationDialogComponent} from './creation-dialog/creation-dialog.component';
import {DialogModule} from 'primeng/dialog';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {EditorModule} from 'primeng/editor';


@NgModule({
  declarations: [
    ProfileComponent,
    EventsComponent,
    CreationDialogComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    Button,
    FlexLayoutModule,
    ButtonDirective,
    DividerModule,
    DialogModule,
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    CheckboxModule,
    CalendarModule,
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class MainModule {
}

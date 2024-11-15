import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {ButtonDirective} from 'primeng/button';
import {RouterLink} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {AuthRoutingModule} from './auth-routing.module';
import {provideHttpClient} from '@angular/common/http';
import { EmailConfirmedComponent } from './email-confirmed/email-confirmed.component';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    EmailConfirmedComponent
  ],
  imports: [
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonDirective,
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    AuthRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AuthModule {
}

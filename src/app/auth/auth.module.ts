import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {RouterLink} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {provideHttpClient} from '@angular/common/http';
import {EmailConfirmedComponent} from './email-confirmed/email-confirmed.component';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    EmailConfirmedComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatFormField,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AuthModule {
}

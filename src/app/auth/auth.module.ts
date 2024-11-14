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


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonDirective,
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    AuthRoutingModule
  ],
  providers: [
    provideHttpClient()
  ]
})
export class AuthModule {
}

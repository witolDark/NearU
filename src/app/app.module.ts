import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import {Button, ButtonDirective} from 'primeng/button';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputTextModule} from 'primeng/inputtext';
import { EventsComponent } from './events/events.component';
import { CardComponent } from './card/card.component';
import {CardModule} from 'primeng/card';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EventsComponent,
    CardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        ButtonDirective,
        InputGroupAddonModule,
        InputGroupModule,
        InputTextModule,
        Button,
        CardModule,
        ReactiveFormsModule
    ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

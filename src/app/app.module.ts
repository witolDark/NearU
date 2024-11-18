import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {Button, ButtonDirective} from 'primeng/button';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputGroupModule} from 'primeng/inputgroup';
import {InputTextModule} from 'primeng/inputtext';
import {CardComponent} from './shared/components/card/card.component';
import {CardModule} from 'primeng/card';
import {ReactiveFormsModule} from "@angular/forms";
import {provideHttpClient} from '@angular/common/http';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';

@NgModule({
  declarations: [
    AppComponent,
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
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

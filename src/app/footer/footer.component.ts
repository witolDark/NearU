import { Component } from '@angular/core';
import {FlexLayoutModule} from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FlexLayoutModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

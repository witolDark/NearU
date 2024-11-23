import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth/auth.service';
import {EventService} from '../../shared/services/event/event.service';

@Component({
  selector: 'app-creation-dialog',
  templateUrl: './creation-dialog.component.html',
  styleUrl: './creation-dialog.component.scss'
})
export class CreationDialogComponent {
  constructor(private eventService: EventService) {}

  visible = false;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    rangeDates: new FormControl('', Validators.required),
    ticketChecked: new FormControl(false),
    ticketLink: new FormControl(''),
    location: new FormControl('', Validators.required),
    description: new FormControl('')
  })

  sendEvent() {
    this.eventService.sendEvent();
  }

  showDialog() {
    this.visible = true;
  }
}

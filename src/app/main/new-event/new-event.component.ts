import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../shared/services/event/event.service';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.scss'
})
export class NewEventComponent {
  EventForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    ticketRequired: new FormControl(false),
    ticketUrl: new FormControl('')
  })

  constructor(private authService: AuthService, private eventService: EventService) {
  }


  onSubmit() {
    const data = this.EventForm.value;
    this.eventService.addEvent({name: this.authService.user.name, ...data})
  }

  onLocationChange(location: string) {
    this.EventForm.patchValue({location});
    console.log(this.EventForm.get('location').value);
  }
}

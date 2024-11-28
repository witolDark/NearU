import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../shared/services/event/event.service';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-creation-dialog',
  templateUrl: './creation-dialog.component.html',
  styleUrl: './creation-dialog.component.scss'
})
export class CreationDialogComponent {
  constructor(private eventService: EventService, private authService: AuthService) {
  }

  visible = false;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    rangeDates: new FormControl('', Validators.required),
    ticketChecked: new FormControl(false),
    ticketLink: new FormControl(''),
    location: new FormControl('', Validators.required)
  })

  onSubmit() {
    const creator = this.authService.user.name;
    const title = this.form.value.title;
    const description = this.form.value.description;
    const startDate = this.form.value.rangeDates[0];
    const endDate = this.form.value.rangeDates[1];
    const location = this.form.value.location;
    const ticketRequired = this.form.value.ticketChecked;
    const ticketUrl = this.form.value.ticketLink;

    this.eventService.addEvent({creator, title, description, startDate, endDate, location, ticketRequired, ticketUrl}).subscribe(res => {
      alert('Подія надіслана на обробку.');
    });
    this.showDialog()
  }

  showDialog() {
    this.visible = !this.visible;
  }
}

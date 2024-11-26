import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../shared/services/event/event.service';

@Component({
  selector: 'app-creation-dialog',
  templateUrl: './creation-dialog.component.html',
  styleUrl: './creation-dialog.component.scss'
})
export class CreationDialogComponent {
  constructor(private eventService: EventService) {
  }

  visible = false;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    rangeDates: new FormControl('', Validators.required),
    ticketChecked: new FormControl(false),
    ticketLink: new FormControl(''),
    location: new FormControl('', Validators.required)
  })

  onSubmit() {
    const startDate = this.form.value.rangeDates[0];
    const endDate = this.form.value.rangeDates[1];

    const { title: this.form.value.title, descri}

    this.eventService.addEvent().subscribe();
  }

  showDialog() {
    this.visible = !this.visible;
  }
}

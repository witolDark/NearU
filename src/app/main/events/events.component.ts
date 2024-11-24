import {Component, OnInit, ViewChild} from '@angular/core';
import {CreationDialogComponent} from '../creation-dialog/creation-dialog.component';
import {EventPayload} from '../../shared/models/event-payload';
import {EventService} from '../../shared/services/event/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  constructor(private eventService: EventService) {
  }

  @ViewChild(CreationDialogComponent) creationDialog!: CreationDialogComponent;

  events: EventPayload[] | undefined;

  showDialog() {
    this.creationDialog.showDialog();
  }

  ngOnInit() {
    this.events = this.eventService.events;
  }
}

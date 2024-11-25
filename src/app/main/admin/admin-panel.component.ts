import {Component, OnInit} from '@angular/core';
import {EventService} from '../../shared/services/event/event.service';
import {EventPayload} from '../../shared/models/event-payload';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent implements OnInit {

  events: EventPayload[] | undefined;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.events = this.eventService.events;
  }
}

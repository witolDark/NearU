import {Component, OnInit} from '@angular/core';
import {EventPayload} from '../../shared/models/event-payload';
import {EventService} from '../../shared/services/event/event.service';
import {AuthService} from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  constructor(protected eventService: EventService, protected authService: AuthService) {
  }

  events: EventPayload[] = [];

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: EventPayload[]) => {
      this.events = events;
    })
  }
}

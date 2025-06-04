import {Component, OnInit} from '@angular/core';
import {EventPayload} from '../../shared/models/event-payload';
import {EventService} from '../../shared/services/event/event.service';
import {AuthService} from '../../shared/services/auth/auth.service';
import {take} from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events: EventPayload[] = [];

  constructor(protected eventService: EventService, protected authService: AuthService) {
  }

  ngOnInit() {
    this.getEvents()
  }

  getEvents() {
    this.eventService.getEvents().pipe(take(1)).subscribe((events: EventPayload[]) => {
      this.events = events;
    })
  }
}

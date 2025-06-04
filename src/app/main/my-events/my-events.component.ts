import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth/auth.service';
import {EventService} from '../../shared/services/event/event.service';
import {EventPayload} from '../../shared/models/event-payload';
import {take} from 'rxjs';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.scss'
})
export class MyEventsComponent implements OnInit {
  constructor(private eventService: EventService, protected authService: AuthService) {}

  events: EventPayload[] = [];

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEventsByCreator(this.authService.user.name).pipe(take(1)).subscribe(response => {
      this.events = response;
    })
  }
}

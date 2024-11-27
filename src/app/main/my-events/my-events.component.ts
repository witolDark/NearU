import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth/auth.service';
import {EventService} from '../../shared/services/event/event.service';
import {EventPayload} from '../../shared/models/event-payload';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.scss'
})
export class MyEventsComponent implements OnInit {
  constructor(private eventService: EventService, private authService: AuthService) {}

  events: EventPayload[] = [];

  ngOnInit() {
    this.eventService.getEventsByCreator(this.authService.user.name).subscribe(response => {
      this.events = response;
    })
  }
}

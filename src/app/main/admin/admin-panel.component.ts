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
    this.eventService.getEventsPending().subscribe(response => {
      this.events = response;
    })
  }

  onPublish(id: string) {
    this.eventService.approveEvent(id).subscribe(response => {
      this.events = response;
    })
  }

  onDecline(id: string) {
    this.eventService.declineEvent(id).subscribe(response => {
      this.events = response;
    })
  }
}

import {Component, Input} from '@angular/core';
import {EventPayload} from '../../shared/models/event-payload';
import {Status} from '../../shared/enums/Status';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input() event: EventPayload | undefined;

  eventStatus: Status;

  getStatusColor() {
    switch (this.event.status as string) {
      case 'active':
        this.eventStatus = Status.ACTIVE
        return 'limegreen';
      case 'inactive':
        this.eventStatus = Status.INACTIVE
        return 'orangered';
      case 'pending':
        this.eventStatus = Status.PENDING
        return 'gray';
      case 'upcoming':
        this.eventStatus = Status.UPCOMING
        return 'lightblue';
      case 'canceled':
        this.eventStatus = Status.CANCELLED
        return 'black';
      default:
        return 'black';
    }
  }

  protected readonly Status = Status;
}

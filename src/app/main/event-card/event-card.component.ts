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

  getStatusColor(status: Status | null | undefined) {
    if(status) {
      switch (status) {
        case Status.ACTIVE:
          return 'green';
        case Status.INACTIVE:
          return 'red';
        case Status.PENDING:
          return 'gray';
        case Status.UPCOMING:
          return 'blue';
        default:
          return 'black';
      }
    }
    return 'black';
  }

  protected readonly Status = Status;
}

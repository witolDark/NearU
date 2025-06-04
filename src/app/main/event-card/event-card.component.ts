import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventPayload} from '../../shared/models/event-payload';
import {Status} from '../../shared/enums/Status';
import {createCalendarEvent} from '../../shared/util';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Role} from '../../shared/enums/Role';
import {EventService} from '../../shared/services/event/event.service';
import {take} from 'rxjs';
import {SnackBarService} from '../../shared/services/snack-bar.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input() event: EventPayload | undefined;
  @Output() approve: EventEmitter<string> = new EventEmitter();
  @Output() decline: EventEmitter<string> = new EventEmitter();
  @Output() update: EventEmitter<void> = new EventEmitter();

  get isAdminView(): boolean {
    return this.router.url.includes('/admin');
  }

  eventStatus: Status;
  protected readonly Status = Status;

  constructor(private router: Router, protected authService: AuthService, private eventService: EventService, private snackBarService: SnackBarService) {
  }

  onApprove(id: string) {
    this.approve.emit(id);
  }

  onDecline(id: string) {
    this.decline.emit(id);
  }

  onDelete(id: string) {
    this.eventService.deleteEvent(id).pipe(take(1)).subscribe({ next: () => {
      this.update.emit();
      this.snackBarService.openSnackBar('Видалено');
    }});
  }

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

  onCreateCalendarEvent() {
    createCalendarEvent(this.event);
  }

  protected readonly Role = Role;
}

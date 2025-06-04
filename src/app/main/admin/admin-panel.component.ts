import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {EventService} from '../../shared/services/event/event.service';
import {EventPayload} from '../../shared/models/event-payload';
import {Subject, take, takeUntil} from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent implements OnInit, OnDestroy {
  events = signal<EventPayload[]>([]);
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.getPendingEvents();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onPublish(id: string) {
    this.eventService.approveEvent(id).pipe(take(1)).subscribe(() => {
      this.getPendingEvents();
    });
  }

  onDecline(id: string) {
    this.eventService.declineEvent(id).pipe(take(1)).subscribe(() => {
      this.getPendingEvents();
    });
  }

  getPendingEvents() {
    this.eventService.getEventsPending().pipe(takeUntil(this.destroy$)).subscribe(response => {
      this.events.set(response);
    });
  }
}

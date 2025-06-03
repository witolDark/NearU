import {Component, Injector, OnInit, runInInjectionContext, signal, Signal} from '@angular/core';
import {EventPayload} from '../../shared/models/event-payload';
import {EventService} from '../../shared/services/event/event.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {createCalendarEvent, downloadIcsEvent} from '../../shared/util';
import {SnackBarService} from '../../shared/services/snack-bar.service';
import {Group} from '../../shared/models/group';
import {toSignal} from '@angular/core/rxjs-interop';
import {MatDialog} from '@angular/material/dialog';
import {DiscussionDialogComponent} from '../discussion-dialog/discussion-dialog.component';
import {filter, take} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  constructor(private dialogRef: MatDialog, private injector: Injector, private eventService: EventService, private route: ActivatedRoute, private location: Location, private snackBarService: SnackBarService) {
  }

  eventId: string | null | undefined;
  event: EventPayload | undefined;
  discussions: Signal<Group[]> = signal([]);

  onShareClick() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      this.snackBarService.openSnackBar('Посилання скопійовано', 'ОК')
    });
  }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventById(this.eventId).subscribe(res => {
      this.event = res;

      this.getGroups();
    })
  }

  getGroups() {
    runInInjectionContext(this.injector, () => {
      this.discussions = toSignal(this.eventService.getDiscussionsByEventId(this.event.id));
    });
  }


  goBack() {
    this.location.back();
  }

  onDiscussionCreate() {
    const dialogRef = this.dialogRef.open(DiscussionDialogComponent, {data: this.event.id});

    dialogRef.afterClosed().pipe(take(1), filter(Boolean)).subscribe(() => this.getGroups())
  }

  protected readonly createCalendarEvent = createCalendarEvent;
  protected readonly downloadIcsEvent = downloadIcsEvent;
}

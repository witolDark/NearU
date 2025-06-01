import {Component, OnInit} from '@angular/core';
import {EventPayload} from '../../shared/models/event-payload';
import {EventService} from '../../shared/services/event/event.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {combineDateAndTime, createCalendarEvent, downloadIcsEvent} from '../../shared/util';
import {SnackBarService} from '../../shared/services/snack-bar.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  constructor(private eventService: EventService, private route: ActivatedRoute, private location: Location, private snackBarService: SnackBarService) {
  }

  event: EventPayload | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;
  eventId: string | null | undefined;

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
      this.startDate = combineDateAndTime(this.event.startDate, this.event.startTime);
      this.endDate = combineDateAndTime(this.event.endDate, this.event.endTime);
    })
  }

  goBack() {
    this.location.back();
  }

  protected readonly createCalendarEvent = createCalendarEvent;
  protected readonly downloadIcsEvent = downloadIcsEvent;
  protected readonly combineDateAndTime = combineDateAndTime;
}

import {Component, OnInit} from '@angular/core';
import {EventPayload} from '../../shared/models/event-payload';
import {Status} from '../../shared/enums/Status';
import {EventService} from '../../shared/services/event/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  userRating: number | undefined;
  event: EventPayload | undefined;
  eventId: string | null |undefined;

  onShareClick() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Скопійовано');
    });
  }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    console.log(this.eventId);
    this.event = this.eventService.events.at(Number(this.eventId));
  }

  protected readonly Status = Status;
}

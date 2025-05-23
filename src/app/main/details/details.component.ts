import {Component, OnInit} from '@angular/core';
import {EventPayload} from '../../shared/models/event-payload';
import {EventService} from '../../shared/services/event/event.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  constructor(private eventService: EventService, private route: ActivatedRoute, private location: Location) {
  }

  userRating: number | undefined;
  event: EventPayload | undefined;
  eventId: string | null | undefined;

  onShareClick() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Скопійовано');
    });
  }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    console.log(this.eventId);
    this.eventService.getEventById(this.eventId).subscribe(res => {
      this.event = res;
    })
  }

  goBack() {
    this.location.back();
  }
}

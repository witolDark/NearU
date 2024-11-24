import { Component } from '@angular/core';
import {EventPayload} from '../../shared/models/event-payload';
import {Status} from '../../shared/enums/Status';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  event: EventPayload = {
    creator: "Witold",
    title: "Meeting",
    location: "Ukraine, Lviv",
    description: "Lorem ipsum hyhyhy",
    startDate: "10.10.2024",
    endDate: "20.10.2024",
    ticketRequired: true,
    ticketUrl: "https://www.youtube.com/watch?v=e_R0tFL7rn4",
    status: Status.ACTIVE,
    rating: 4.3
  }

  userRating: number | undefined;

  onShareClick() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert('Скопійовано');
    });
  }
}

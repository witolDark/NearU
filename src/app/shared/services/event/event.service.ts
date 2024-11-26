import { Injectable } from '@angular/core';
import {EventPayload} from '../../models/event-payload';
import {Status} from '../../enums/Status';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl = 'http://localhost:5000/api/evets';

  addEvent(data: { title: string, rangeDates: string, ticketChecked: string, ticketLink: string, location: string, description: string }) {
    return this.http.post(this.apiUrl, { creator: this.authService.user?.name, ...data})
  }

  constructor(private http: HttpClient, private authService: AuthService) { }

  events: EventPayload[] = [
    {
      id: "1",
      creator: "John Doe",
      title: "Tech Conference 2024",
      location: "San Francisco, CA",
      description: "A conference for technology enthusiasts and professionals.",
      startDate: "2024-12-01T10:00:00Z",
      endDate: "2024-12-03T18:00:00Z",
      ticketRequired: true,
      ticketUrl: "https://techconf2024.com/tickets",
      status: Status.INACTIVE,
      rating: 4.8,
    },
    {
      id: "2",
      creator: "Jane Smith",
      title: "Art Exhibition",
      location: "New York City, NY",
      description: "An exhibition showcasing contemporary art pieces.",
      startDate: "2024-11-25T09:00:00Z",
      endDate: "2024-11-30T17:00:00Z",
      ticketRequired: false,
      ticketUrl: null,
      status: Status.ACTIVE,
      rating: 4.5,
    },
    {
      id: "3",
      creator: null,
      title: "Yoga Retreat",
      location: "Bali, Indonesia",
      description: "A relaxing yoga retreat in a beautiful tropical location.",
      startDate: "2025-01-15T06:00:00Z",
      endDate: "2025-01-20T12:00:00Z",
      ticketRequired: true,
      ticketUrl: "https://yogaretreat2025.com/register",
      status: Status.ACTIVE,
      rating: null,
    },
    {
      id: "4",
      creator: "Event Agency",
      title: "Music Festival",
      location: "Austin, TX",
      description: "An outdoor festival featuring multiple music genres.",
      startDate: "2024-12-10T14:00:00Z",
      endDate: "2024-12-12T23:00:00Z",
      ticketRequired: true,
      ticketUrl: "https://musicfest2024.com",
      status: Status.INACTIVE,
      rating: 4.7,
    },
    {
      id: "5",
      creator: "Local Library",
      title: "Book Club Meeting",
      location: "Seattle, WA",
      description: "A monthly meeting for book enthusiasts to discuss their favorite books.",
      startDate: "2024-12-05T18:30:00Z",
      endDate: "2024-12-05T20:00:00Z",
      ticketRequired: false,
      ticketUrl: null,
      status: Status.ACTIVE,
      rating: 4.2,
    }
  ];
}

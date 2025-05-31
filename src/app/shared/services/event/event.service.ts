import {Injectable} from '@angular/core';
import {EventPayload} from '../../models/event-payload';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: EventPayload[] | undefined;

  apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {
  }

  addEvent(data: {
    creator: string,
    title: string,
    description: string,
    startDate: string,
    startTime: string,
    endDate: string,
    endTime: string,
    location: string,
    ticketRequired: boolean,
    ticketUrl: string
  }) {
    return this.http.post(`${this.apiUrl}/events`, {...data});
  }

  getEvents() {
    return this.http.get<EventPayload[]>(`${this.apiUrl}/events`);
  }

  getEventsPending() {
    return this.http.get<EventPayload[]>(`${this.apiUrl}/pendings`);
  }

  getEventById(id: string) {
    return this.http.get<EventPayload>(`${this.apiUrl}/events/${id}`);
  }

  getEventsByCreator(creator: string) {
    return this.http.get<EventPayload[]>(`${this.apiUrl}/creator/${creator}`);
  }

  approveEvent(id: string) {
    return this.http.put<EventPayload[]>(`${this.apiUrl}/approve/${id}`, {});
  }

  declineEvent(id: string) {
    return this.http.put<EventPayload[]>(`${this.apiUrl}/decline/${id}`, {});
  }
}

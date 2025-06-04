import {Injectable} from '@angular/core';
import {EventPayload} from '../../models/event-payload';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../models/category';
import {map, take, tap} from 'rxjs';
import {Group} from '../../models/group';
import {ProgressBarService} from '../progress-bar.service';
import {CommentResponse} from '../../models/comment';
import {Review} from '../../models/review';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: EventPayload[] | undefined;

  apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient, private progressBarService: ProgressBarService) {
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

  getCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`).pipe(take(1));
  }

  getGroupById(id: string) {
    return this.http.get<Group>(`${this.apiUrl}/groups/${id}`).pipe(take(1));
  }

  getDiscussionsByEventId(id: string) {
    this.progressBarService.changeMode(true);
    return this.http.get<Group[]>(`${this.apiUrl}/groups/event/${id}`).pipe(take(1), tap(() => this.progressBarService.changeMode(false)));
  }

  createDiscussion(data: { eventId: string, userId: string, groupName: string, description: string }) {
    return this.http.post(`${this.apiUrl}/groups`, {...data});
  }

  getCommentsByGroupId(id: string) {
    this.progressBarService.changeMode(true);
    return this.http.get<CommentResponse>(`${this.apiUrl}/comments/group/${id}`).pipe(take(1), map(res => res.populatedComments), tap(() => this.progressBarService.changeMode(false)));
  }

  leaveComment(data: { userId: string, groupId: string, text: string }) {
    return this.http.post(`${this.apiUrl}/groups/comments`, {...data});
  }

  rateEvent(data: { eventId: string, userId: string, rating: number, text: string }) {
    return this.http.post(`${this.apiUrl}/review`, {...data});
  }

  getReviewsByEventId(id: string) {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews/event/${id}`);
  }
}

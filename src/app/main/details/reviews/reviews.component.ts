import {Component, effect, Input, signal} from '@angular/core';
import {Review} from '../../../shared/models/review';
import {EventService} from '../../../shared/services/event/event.service';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs';
import {EventPayload} from '../../../shared/models/event-payload';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {SnackBarService} from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  @Input() event: EventPayload;
  reviews = signal<Review[]>([]);
  eventId = signal<string>('');
  userRating = signal<number>(0);
  text = new FormControl(null, Validators.minLength(20));

  constructor(private snackBarService: SnackBarService, private eventService: EventService, private route: ActivatedRoute, private authService: AuthService) {
    this.eventId.set(this.route.snapshot.paramMap.get('id') ?? '');

    effect(() => {
      const id = this.eventId();
      if (!id) return;

      this.eventService.getReviewsByEventId(id).pipe(take(1)).subscribe(data => {
        this.reviews.set(data);
      });
    });
  }

  onRate(star: number) {
    if (this.userRating() === star) {
      this.userRating.set(0);
    } else {
      this.userRating.set(star);
    }
  }

  onApplyRate() {
    const text = this.text.value;
    const userId = this.authService.user.id;
    const eventId = this.event.id;
    const rating = this.userRating();
    this.eventService.rateEvent({eventId, userId, rating, text}).pipe(take(1)).subscribe({
      next: () => {
        this.snackBarService.openSnackBar('Відгук залишено');
        this.eventService.getReviewsByEventId(this.event.id).pipe(take(1)).subscribe(data => {
          this.reviews.set(data);
        });
        this.eventService.getEventById(this.event.id).pipe(take(1)).subscribe(data => {
          this.event = data;
        });
      }
    });
  }
}

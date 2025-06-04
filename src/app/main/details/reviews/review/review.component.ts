import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../../../shared/models/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;
  stars = [];

  ngOnInit() {
    for (let i = 0; i < this.review.rating; i++) {
      this.stars.push(i); // cringe but still
    }
  }
}

import {Component, Input} from '@angular/core';
import {Group} from '../../../shared/models/group';

@Component({
  selector: 'app-discussion-card',
  templateUrl: './discussion-card.component.html',
  styleUrl: './discussion-card.component.scss'
})
export class DiscussionCardComponent {
  @Input() discussion: Group;
}

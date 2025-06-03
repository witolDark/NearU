import {Component, Input} from '@angular/core';
import {CommentModel} from '../../../shared/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input() comment: CommentModel;
}

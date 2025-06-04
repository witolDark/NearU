import {Component, Injector, OnInit, runInInjectionContext, signal, Signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../shared/services/event/event.service';
import {AuthService} from '../../shared/services/auth/auth.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {Observable, take} from 'rxjs';
import {Group} from '../../shared/models/group';
import {CommentModel} from '../../shared/models/comment';
import {Role} from '../../shared/enums/Role';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrl: './discussions.component.scss'
})
export class DiscussionsComponent implements OnInit {
  comments: Signal<CommentModel[]> = signal([]);
  group!: Observable<Group>;
  groupId!: string;
  userId!: string;

  CommentFormGroup = new FormGroup({
    text: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    protected authService: AuthService,
    private injector: Injector
  ) {
  }

  ngOnInit(): void {
    this.groupId = this.route.snapshot.paramMap.get('id');
    this.group = this.eventService.getGroupById(this.groupId);
    this.userId = this.authService.user.id;
    this.getComments();
  }

  onSubmit() {
    const text = this.CommentFormGroup.get('text').value;

    this.eventService.leaveComment({
      userId: this.userId,
      groupId: this.groupId,
      text
    }).subscribe({next: () => this.getComments()});
  }

  getComments() {
    runInInjectionContext(this.injector, () => {
      this.comments = toSignal(this.eventService.getCommentsByGroupId(this.groupId));
    });
  }

  onDelete(commentId: string) {
    this.eventService.deleteComment({ commentId, userId: this.userId}).pipe(take(1)).subscribe({next: () => this.getComments()});
  }

  protected readonly Role = Role;
}

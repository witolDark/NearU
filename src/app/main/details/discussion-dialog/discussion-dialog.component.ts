import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {EventService} from '../../../shared/services/event/event.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SnackBarService} from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-discussion-dialog',
  templateUrl: './discussion-dialog.component.html',
  styleUrl: './discussion-dialog.component.scss'
})
export class DiscussionDialogComponent implements OnInit {
  DiscussionForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    eventId: string
  }, private dialogRef: MatDialogRef<DiscussionDialogComponent>, private authService: AuthService, private eventService: EventService, private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    this.DiscussionForm = new FormGroup({
      groupName: new FormControl(null, Validators.required),
      description: new FormControl(null)
    });
  }

  onSubmit(): void {
    const data = this.DiscussionForm.value;
    const userId = this.authService.user.id;
    this.eventService.createDiscussion({eventId: this.data, userId, ...data}).subscribe({
      next: () => {
        this.dialogRef.close(true);
        this.snackBarService.openSnackBar('Групу створено')
      },
      error: (error: any) => {
        console.error(error)
        this.snackBarService.openSnackBar('Помилка при створенні')
      }
    });
  }
}

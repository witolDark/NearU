import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../shared/services/event/event.service';
import {AuthService} from '../../shared/services/auth/auth.service';
import {catchError, EMPTY, take, tap} from 'rxjs';
import {Router} from '@angular/router';
import {SnackBarService} from '../../shared/services/snack-bar.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.scss'
})
export class NewEventComponent {
  EventForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    ticketRequired: new FormControl(false),
    ticketUrl: new FormControl('')
  })

  toggle: string = 'offline';

  constructor(private authService: AuthService, private eventService: EventService, private router: Router, private snackBarService: SnackBarService) {
  }

  onSubmit() {
    const data = this.EventForm.value;
    this.eventService.addEvent({creator: this.authService.user.name, ...data}).pipe(take(1), tap(() => {
      this.snackBarService.openSnackBar('Подію успішно створено, очікуйте модерацію', 'ОК')
      this.router.navigate(['main/events']);
    }), catchError((err: HttpErrorResponse) => {
      this.snackBarService.openSnackBar(err.message, 'ЗАКРИТИ');
      return EMPTY;
    })).subscribe();
  }

  onLocationChange(location: string) {
    this.EventForm.patchValue({location});
  }
}

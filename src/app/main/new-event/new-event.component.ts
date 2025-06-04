import {Component, Injector, OnInit, runInInjectionContext, Signal} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../shared/services/event/event.service';
import {AuthService} from '../../shared/services/auth/auth.service';
import {catchError, EMPTY, take, tap} from 'rxjs';
import {Router} from '@angular/router';
import {SnackBarService} from '../../shared/services/snack-bar.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Category} from '../../shared/models/category';
import {toSignal} from '@angular/core/rxjs-interop';
import {combineDateAndTime} from '../../shared/util';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.scss'
})
export class NewEventComponent implements OnInit {
  categories!: Signal<Category[]>

  EventForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    ticketRequired: new FormControl(false),
    ticketUrl: new FormControl('')
  })

  toggle: string = 'offline';

  constructor(private injector: Injector, private authService: AuthService, private eventService: EventService, private router: Router, private snackBarService: SnackBarService) {
  }

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      this.categories = toSignal(this.eventService.getCategories());
    });
  }

  onSubmit() {
    const data = this.EventForm.value;
    data.startDate = combineDateAndTime(data.startDate, data.startTime);
    delete data.startTime;
    data.endDate = combineDateAndTime(data.endDate, data.endTime);
    delete data.endTime;
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

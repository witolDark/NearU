import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  progressBarActive: boolean = false;

  constructor() {
  }

  changeMode(value?: boolean) {
    if (typeof value === 'boolean' && this.progressBarActive === value) {
      this.progressBarActive = value;
    } else if (typeof value === 'boolean' && this.progressBarActive !== value) {
      this.progressBarActive = !value;
    } else if (value === undefined) {
      this.progressBarActive = !this.progressBarActive;
    }
  }
}

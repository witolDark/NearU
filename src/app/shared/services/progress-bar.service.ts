import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  progressBarActive: boolean = false;

  constructor() {
  }

  changeMode(value?: boolean) {
    if (value) {
      this.progressBarActive = this.progressBarActive !== value;
    } else {
      this.progressBarActive = !this.progressBarActive;
    }
  }
}

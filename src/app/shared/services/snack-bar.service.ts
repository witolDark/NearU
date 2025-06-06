import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action ?? 'ОК', { duration: 3000, verticalPosition: 'top'});
  }
}

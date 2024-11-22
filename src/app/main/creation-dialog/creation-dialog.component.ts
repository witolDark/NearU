import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-creation-dialog',
  templateUrl: './creation-dialog.component.html',
  styleUrl: './creation-dialog.component.scss'
})
export class CreationDialogComponent {
  visible = false;
  rangeDates: Date[] | undefined;
  ticketChecked = false;
  text = '';
  value: string = ''

  form = new FormGroup({})

  showDialog() {
    this.visible = true;
  }
}

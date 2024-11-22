import {Component, OnInit, ViewChild} from '@angular/core';
import {CreationDialogComponent} from '../creation-dialog/creation-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  numbers = [1,2,3,4,5,6,7,8];

  @ViewChild(CreationDialogComponent) creationDialog!: CreationDialogComponent;

  showDialog() {
    this.creationDialog.showDialog();
  }
}

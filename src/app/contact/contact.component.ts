import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeactivateComponent } from '../candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements IDeactivateComponent {
  constructor(private router: Router) {}
  firstName: string = '';
  lastName: string = '';
  country: string = '';
  subject: string = '';

  ProcessForm() {
    //Write logic to process the form
    this.router.navigate(['About']);
  }
  canExit() {
    if (this.firstName || this.lastName || this.country || this.subject) {
      return confirm(
        'You have unsaved changes. Do you really want to discard these changes?'
      );
    } else {
      return true;
    }
  }
}

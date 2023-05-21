import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers: [EnrollService] (app)-hierarchical injection,
})
export class JavascriptComponent {
  title = 'JavaScript';

  constructor(private enrollService: EnrollService) {}
  onEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
}

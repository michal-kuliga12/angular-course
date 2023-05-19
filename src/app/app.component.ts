import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'custom-directives';

  active: boolean = false;
  display: boolean = false;
  occupation: string = 'lawyer';

  displayNotice() {
    this.display = !this.display;
  }
}

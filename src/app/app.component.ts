import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'life-cycle-hooks';

  inputText: string = '';
  isComponentDestroyed: boolean = false;

  onSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }
  DestroyComponent() {
    this.isComponentDestroyed = !this.isComponentDestroyed;
  }
}

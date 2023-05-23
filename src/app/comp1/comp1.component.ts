import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  constructor(private dataService: DataService) {}
  // Używamy two way data binding żeby połączyć enteredText z wartością wpisywaną z inputa
  // Aby [(ngModel)] zadziałał musimy zaimportować w app.module FormsModule
  enteredText: string = '';

  // Przy naciśnięciu przycisku emitujemy event
  // Następnie ten event trzeba subskrybować w komponencie 2
  onButtonClicked() {
    this.dataService.raiseDataEmitterEvent(this.enteredText);
  }
}

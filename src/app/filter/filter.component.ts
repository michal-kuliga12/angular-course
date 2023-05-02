import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input('total') all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioButtonValue: string = 'All';
  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();
  onRadioButtonSelectionChanged() {
    // console.log(this.selectedRadioButtonValue);
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }
}

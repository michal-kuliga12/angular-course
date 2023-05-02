import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  enteredSearchValue: string = '';

  // Tworzymy event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  // Tworzymy metodę która będzie wywoływała ten event
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
    // Metoda emit powoduje wywołanie zdarzenia
    // Jako argument podajemy wartość którą emitujemy
  }
}

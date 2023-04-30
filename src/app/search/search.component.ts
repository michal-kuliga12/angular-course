import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchValue: string = '';
  changeSearchValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    console.log(this.searchValue);
  }
}

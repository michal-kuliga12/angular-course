import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  constructor(private dataService: DataService) {}
  inputText: string = '';
  // Przy wczytaniu komponentu subskrybujemy event i przechwytujemy wartość, która zostaje wyemitowana
  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe((val) => {
      this.inputText = val;
    });
  }
}

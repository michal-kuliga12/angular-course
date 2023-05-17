import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit, AfterContentInit {
  ngOnInit(): void {
    console.log(this.paragraphEl);
  }
  ngAfterContentInit(): void {
    console.log(this.paragraphEl.nativeElement.textContent);
    this.paragraphEl.nativeElement.textContent = 'this is new paragraph';
    console.log(this.paragraphEl.nativeElement.textContent);
  }
  @ContentChild('paragraph') paragraphEl!: ElementRef;
}

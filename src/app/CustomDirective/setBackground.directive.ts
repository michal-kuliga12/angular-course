import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective implements OnInit {
  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = '#C8E6C9';
    this.element = element;
  }
  // Dobrą praktyką jest zapisywanie logiki w hooku ngOnInit, ponieważ zostnaie wykonana w momencie keidy dyrektywa zostanie całkowicie zainicjalizowana

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#C8E6C9';
  }
}

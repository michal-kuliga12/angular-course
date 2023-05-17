import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  //Renderer 2 jest klasą która pozwala nam na manipulacje DOM'em bez bezpośredniej ingerencji w elementy co prowadzi do zwiększenia abstrakcji pomiędzy kodem komponentu oraz elementami DOM
  // Dopisek private sprawia że Angular tworzy nam prywatne wartości o takiej samej nazwie i przypisuje je nam do użytych dalej zmiennych
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#F1948A'
    ); // Zastosowanie stylów
    this.renderer.addClass(this.element.nativeElement, 'container'); // Dodanie klasy
    this.renderer.setAttribute(
      this.element.nativeElement,
      'title',
      'This is example div'
    );
  }
}

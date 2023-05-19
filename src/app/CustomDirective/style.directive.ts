import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  // Typescript umożliwia poprzez słowo kluczowe private utworzyć od razu zmienne o podanych nazwach i przypisywać do nich interfejs
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  // Teraz tworzymy metodę udekorowaną @Inputem
  // Metoda umożliwia nam zastosowanie styli określonych w argumencie na elemencie poprzez metody renderera
  @Input() set appStyle(styles: Object) {
    let entries = Object.entries(styles);
    for (let entry of entries) {
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1]);
    }
  }
}

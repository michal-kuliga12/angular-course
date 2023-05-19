import { Renderer2 } from '@angular/core';
import { Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  // Cały zamysł polega na tym, że w htmlu przypisujemy naszą dyrektywę do pewnego obiektu. Chcemy tutaj w skrypcie w jakiś sposób otrzymać ten obiekt
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  // Dodanie set umożliwia nam użycie pewnej właściwości jak metody
  // @Input('appClass') set display(value: Object) {
  @Input() set appClass(value: Object) {
    // Object entries powoduje zapisanie obiektu w postaci macierzowej tj:
    // [0: [container,true]
    // 1: [change-font,true]]
    let entries = Object.entries(value);
    // Tworzymy pętlę for, która ma za zadanie przypisywać klasy do elementu w zależności od warunku. Przy każdej iteracji sprawdzany jest inny warunek
    // zamiast 'let entry of entries' możemy zapisać let [className,condition] of entries, wtedy destrukturyzujemy macierz i zapis jest bardziej przejrzysty
    for (let [className, condition] of entries) {
      if (condition === true) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}

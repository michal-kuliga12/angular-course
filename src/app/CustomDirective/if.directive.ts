import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]',
})
export class IfDirective {
  // Strukturalna dyrektywa to taka, która wpływa na elementy DOM'u w sposób strukturalny. Czyli poprzez usunięcie lub wstawienie elementu.
  // Przy tworzeniu takiej dyrektywy musimy przemyśleć dwie rzeczy
  // 1. Co chcemy usunąć (template)
  // 2. Skąd chcemy usunąć (viewContainer)
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  // Jako Inputa przyjmujemy wartość którą traktujemy jako metodę dzięki słowu set. Argumentem jest warunek, który:
  // === true => tworzy template w viewContainerze
  // === false => usuwa wszystkie elementy z viewContainera
  // Tutaj viewContainerem jest ng-template
  // W przypadku używania strukturalnych dyrektyw MUSIMY ODWOŁYWAĆ SIĘ DO SELEKTORA poprzez alias albo użycie selektora jako nazwy metody
  @Input() set appIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }
}

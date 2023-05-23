import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
  // // 1. Rozwiązanie przy użyciu event emittera
  // dataEmitter = new EventEmitter<string>();
  // raiseDataEmitterEvent(data: string) {
  //   this.dataEmitter.emit(data);
  // }

  // 2. Rozwiązanie prz użyciu Subject
  // Subject to specjalny typ observable, który umożliwia przesył danych do dużej ilości observer'ów. Są podobne do event emitterów. Więcej w dokumentacji rxJS
  dataEmitter = new Subject<string>();
  raiseDataEmitterEvent(data: string) {
    this.dataEmitter.next(data);
  }
}

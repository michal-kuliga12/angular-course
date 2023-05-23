import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map, of, interval } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService],
})
export class AppComponent implements OnInit {
  title = 'angular-observables';

  // 56. Subjects in RxJS
  constructor(private dataService: DataService) {}
  // Przy tworzeniu observera musimy utworzyć callback i jako argument podać observera pochodzącego z biblioteki rxjs

  // ---------- 1. OBSERVABLE CONSTRUCTOR
  // // ==== PROGRAM ====
  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts...');
  //   // W observer.next podajemy dane które będziemy emitować. Zostaną zemitowane tylko wtedy kiedy będzie jakiś subskrybent
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     // Można również emitować błędu przy pomocy metody error. Po wystąpieniu błędu nie zostaną wyemitowane żadne następne wartości
  //     observer.error(new Error('Something went wrong!'));
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     // Tutaj wykorzystujemy metodę complete, która emituje sygnał o zakończeniu przesyłania danych. Wykorzystujemy ten sygnał do wykonania jakiejś logiki w trzecim callbacku metody subscribe().
  //     // Jeśli są jakieś dodatkowe dane do przesłania po wystąpieniu sygnału complete() to nie zostaną one wyemitowane. Metoda kończy cykl emitowania danych w tym observablu.
  //     // Sygnał complete() występuje tylko wtedy kiedy dane zostaną wyemitowane pomyślnie. W przypadku wystąpienia errora to cykl również zostaje przerwany
  //     observer.complete();
  //   }, 5000);
  // });
  // // ==== PROGRAM ====
  // ----------

  // // ---------- 2. OBSERVABLE CREATE METHOD (notatki są w tym pierwszym)
  // // ==== PROGRAM ====
  // myObservable = Observable.create((observer) => {
  //   console.log('Observable starts...');
  //   setTimeout(() => {
  //     observer.next('A');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('B');
  //   }, 2000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('Something went wrong!'));
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 5000);
  // });
  // //==== PROGRAM ====

  array1 = [1, 2, 6, 7, 9];
  array2 = ['A', 'B', 'C', 'D'];
  // ---------- 3. OBSERVABLE of OPERATOR
  // Możemy do of'a podać dowolną ilość argumentów, z których każdy będzie kompletnym zestawem emitowanych danych. Macierze zostaną przesłane w całości
  // Sygnał complete będzie automatycznie wyemitowany po zakończeniu emisji wszystkich danych
  // // ==== PROGRAM ====
  // myObservable = of(this.array1, this.array2,'a',1);
  // // ==== PROGRAM ====

  // ---------- 4. OBSERVABLE from OPERATOR
  // Przyjmuje tylko jeden argument i służy do emitowania iteracyjnego. Jeśli będziemy emitować macierz to każdy jej element zostanie przesłany osobno.
  // ==== PROGRAM ====
  // myObservable = from(this.array1);
  // ==== PROGRAM ====

  // 55. Operator WIĘCEJ O OPERATORACH MOŻNA POCZYTAĆ W DOKUMENTACJI RXJS

  // Operator - funkcja w rxJS, która jako argument przyjmuje observable i zwraca nowy ze zmienionymi danymi
  // transformedObs = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   })
  // );
  // Filter operator - filtruje dane na podstawie przyjętego warunku
  // filteredObs = this.transformedObs.pipe(
  // filter((val) => {
  //   return val >= 30;
  // })
  // );

  // Możemy zapisać dwa przykłady powyżej w skróconej wersji. Kolejność zapisania operatorów ma znaczenie. Ostatecznie emitowaną wartością będzie wynik operacji observabla na tych dwóch operatorach
  // transformedObs = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val) => {
  //     return val >= 30;
  //   })
  // );

  // 57. Odsubskrybowanie observable - czasami istnieje taka konieczność bo niektóre observable cały czas emitują dane. Bez odsubskrybowania szybko skończy się pamięć przeznaczona na dane
  counterObservable = interval(1000);
  counterSub: any;
  // interval jest funkcją tworzącą observable która emituje sekwencyjnie kolejne liczby (1,2,3,4,5,...) z określonym interwałem czasowym.

  ngOnInit(): void {
    // Tworzymy obserwatora który będzie subskrybował observable
    // Subscribe przyjmuuje 3 opcjonalne parametry
    // this.myObservable.subscribe(next,error,complete);
    // Będziemy o nich mówić w następnych lekcjach
    // next - jest funkcją callback, która zostaje wykonana za każdym razem kiedy metoda next zwróci jakąś wartość
    // Argument val jest to wartoość która została wyemitowana. Dane zostaną wemitowane szczątkowo, czyli nie zostaną przesłane wszystkie na raz
    // observer.next => 1 callback metody subscribe
    // observer.error => 2 callback metody subscribe
    // observer.complete => 3 callback metody subscribe
    // this.transformedObs.subscribe(
    //   (val: any) => {
    //     console.log(val);
    //   },
    //   (error: Error) => {
    //     // Teraz podajemy drugą funkcję callback, która będzie obsługiwała występujące błędy. Jako argument podajemy obiekt błędu, który zostanie wyemitowany (l.23)
    //     alert(error.message);
    //     // W ten sposób obsługujemy błąd informując użytkownika o błędzie
    //   },
    //   () => {
    //     // Callback do complete nie przyjmuje żadnych parametrów i ma za zadanie wykonać jakąś logikę
    //     alert('Observer has completed emitting all values');
    //   }
    // );
    // 57.
  }
  unsubscribe() {
    this.counterSub.unsubscribe();
    // Po wywołaniu metody observable przestanie emitować dane. Aby observable emitowały dane musi być jakiś subskrybent
  }
  subscribe() {
    // Po wywołaniu metody subscribe() utworzony zostanie nowy observable. Czyli będą teraz działały dwa na raz niezależnie od siebie
    this.counterSub = this.counterObservable.subscribe((val) => {
      console.log(val);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  //providers: [EnrollService] (app)-hierarchical injection,
})
export class AngularComponent {
  title = 'Angular';
  // Dependency injector pozwala wstrzykiwać potrzebną instancję klasy do określonego komponentu. Musimy wtedy określić Angularowi w macierzy providers jaką konkretnie instancję chcemy użyć
  // Dependency injector pojawia się w constructorze, kiedy mówimy o tym, że potrzebujemy instance EnrollService więc Angular utworzy ją w zmiennej enrollService. Musimy wtedy zadeklarować provider wyżej
  constructor(private enrollService: EnrollService) {}
  onEnroll() {
    this.enrollService.OnEnrollClicked(this.title);
  }
  // Poniższe rozwiązanie nie jest dobrą praktyką dzięki funkcji Angulara zwanej dependency injector nie musimy tego robić samemu.
  // // Importujemy service z osobnego pliku i bindujemy metod
  // OnEnroll() {
  //   // Utworzenie instance naszej klasy umożliwia nam używanie utworzonych tam metod
  //   const enrollService = new EnrollService();
  //   console.log(enrollService);
  //   enrollService.OnEnrollClicked(this.title);
  // }
}

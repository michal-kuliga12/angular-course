import { Component } from '@angular/core';
import { EnrollService } from './Services/enroll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./app.component.css'],
  //providers: [EnrollService] (app.module)
})
export class AppComponent {
  // Hierarchical injection polega na tym, że użycie serwisu w komponencie powoduje utworzenie instancji danego serwisu w tym komponencie i w jego dzieciach. Dlatego dostarczenie serwisu w komponencie app wytworzyło instancje również dla dzieci komponentu, więc możemy też tam używać metody
  // Najwyższym poziomem dostarczenia serwisu jest app.module > app.component > pozostałe komponenty.
  // Aplikacja na tym poziomie działa, teraz w ramach testu komentujemy macierz providers i dostarczamy serwis w app.module
  constructor(private enrollService: EnrollService) {}
  title = 'SubscribeService';
>>>>>>> Stashed changes
}

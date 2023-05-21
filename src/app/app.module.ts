import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { EnrollService } from './Services/enroll.service';

@NgModule({
  declarations: [AppComponent, JavascriptComponent, AngularComponent],
  imports: [BrowserModule],
  providers: [EnrollService],
  // Dostarczyliśmy serwis w pliku najwyższego poziomu, utworzono więc instancje serwisu w każdym komponencie aplikacji.
  // Dostarczenie serwisu do komponentów niższego rzędu spowoduje nadpisanie tego poprzedniego (starszego)! Ważne, aby o tym wiedzieć ponieważ to często prowadzi do bugów w aplikacji.
>>>>>>> Stashed changes
  bootstrap: [AppComponent],
})
export class AppModule {}

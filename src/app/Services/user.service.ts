import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable() // @Injectable mówi nam o tym, że możliwe jest wstrzykiwanie (injectowanie) innych serwisów do tego serwisu. Kiedyś było tak, że tego dekoratora się dodawało tylko do serwisów do których się miało coś wstrzykiwać. W nowszej wersji Angulara jest zalecane, aby używać dekoratora w każdym serwisie. Jest to dobrą praktyką.
export class UserService {
  // Aby użyc serwisu w serwisie musimy:
  // 1. Utworzyć instancje w konstruktorze
  // 2. Dodać dekorator @Injectable
  // 3. Dostarczamy LoggerService w komponencie wyższego rzędu
  constructor(private Logger: LoggerService) {}
  users = [
    { name: 'John', status: 'active' },
    { name: 'Mark', status: 'inactive' },
    { name: 'Steve', status: 'active' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.Logger.LogMessage(name, status);
  }
}

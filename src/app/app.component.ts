import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService, LoggerService],
})
export class AppComponent implements OnInit {
  title = 'user-service';
  // Aby uzyskać dostęp do użytkowników serwisu musimy dostarczyć jego instancje w tej klasie.
  // 1. Dostarczamy ją w macierzy providers, aby powiedzieć Angularowi, że chcemy uzyskać dostęp do instancji.
  // 2. W constructorze tworzymy właściwość userService i przypisujemy do niej instancje UserService, którą wcześniej zaimportowaliśmy
  constructor(
    private userService: UserService,
    private loggerService: LoggerService
  ) {}
  users: { name: string; status: string }[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}

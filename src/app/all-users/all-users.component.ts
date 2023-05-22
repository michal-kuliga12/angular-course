import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { IUser } from '../interface/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss'],
})
export class AllUsersComponent implements OnInit {
  // W tym komponencie będziemy wyswietlać wszystkich użytkowników, których mamy zapisanych w serwisie
  // Importujemy serwis i tworzymy instancję, będziemy korzystać z tej samej co w app, ponieważ ten komponent jest dzieckiem
  // Definiujemy typ właściwości users i w hooku ngOnInit przypisujemy mu wartość tą przechowywaną w instancji serwisu
  constructor(private userService: UserService) {}
  users: IUser[] = [];
  ngOnInit(): void {
    this.users = this.userService.users;
  }
  // Metoda przypisana do przycisku ma za zadanie wywołać inną metodę w serwisie, która z kolei emituje event. Tym sposobem przebiega komunikacja przekazująca dane wybranego użytkownika
  ShowDetails(user: IUser) {
    this.userService.ShowUserDetails(user);
  }
}

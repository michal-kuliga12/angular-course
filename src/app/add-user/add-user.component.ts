import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [], // Tutaj nie możemy użyc providera ponieważ instancja, w której mamy więcej użytkowników zostanie nadpisana poprzez instancję która jest widoczna na stronie. Jak nie ma providera to operujemy wszędzie na tej samej instancji. Czyli dodanie użytkowników spowoduje edycje instancji która jest wyświetlana na stronie.
})
export class AddUserComponent {
  username: string = '';
  status: string = '';
  // Tworzymy prywatną właściwość userService i przypisujemy do niej instancję serwisu, aby uzyskać dostęp do metod i właściwości
  constructor(private userService: UserService) {}

  AddUser() {
    // Korzystamy tu z metody utworzonej w serwisie
    this.userService.AddNewUser(this.username, this.status);
    // console.log(this.userService.users);
  }
}

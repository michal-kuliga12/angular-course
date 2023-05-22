import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { IUser } from '../interface/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  constructor(private userService: UserService) {}

  user!: IUser;
  ngOnInit(): void {
    // Event będzie emitował observable (nastepna lekcja), które możemy obserwować (subskrybować). Następnie podajemy callback do tej funkcji, aby przechwycić emitowane dane
    this.userService.onShowDetailsClicked.subscribe((data: IUser) => {
      this.user = data;
    });
    // Po przechwyceniu danych użytkownika możemy je wyświetlić w szablonie
  }
}

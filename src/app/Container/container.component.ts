import { Component } from '@angular/core'; // Importujemy dekorator z biblioteki angulara

@Component({
  selector: 'app-container', // Pod taką nazwą się odwołujemy do komponentu w index.html
  templateUrl: './container.component.html', // Dodajemy szablon komponentu
  styleUrls: ['./container.component.scss'], // W razie potrzeby stosowania stylów lokalnych dodajemy arkusz
})
export class ContainerComponent {
  title = 'Container component';
} // Tworzymy komponent, później eksportujemy aby móc go użyć w innych plikach

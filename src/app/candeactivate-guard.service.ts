import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { Observable } from 'rxjs';

export interface IDeactivateComponent {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
// Wcześniej guarda można było używać tylko na komponencie Contact. Dlatego utworzyliśmy interfejs, który umożliwia podanie jako generic jakiegokolwiek komponentu spełniającego implementacje interfejsu
export class CanDeactivateGuardService {
  canDeactivate: CanDeactivateFn<IDeactivateComponent> = (
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) => {
    return component.canExit();
  };
}

import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  LogMessage(name: string, status: string) {
    console.log(
      'A new user: ' + name + ' with status: ' + status + 'has been added'
    );
  }
}

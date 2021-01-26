import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Motor } from '../../model/car.model';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {

  constructor() { }

  public getAllUser(): Observable<User[]> {
    return of([
      {
        name: 'Pierre',
        preferences: [
          {
            motor: Motor.DIESEL,
          }
        ]
      }, {
        name: 'Paul',
        preferences: [
          {
            color: 'blue',
            motor: Motor.ELECTRIC
          }
        ]
      }, {
        name: 'Jacques',
      }
    ]);
  }
}

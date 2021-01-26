import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]> = new BehaviorSubject([]);
  private _currentUser: BehaviorSubject<User> = new BehaviorSubject(null);
  public readonly users: Observable<User[]> = this._users.asObservable();
  public readonly currentUser: Observable<User> = this._currentUser.asObservable();

  constructor() { }

  public updateAllUser(users: User[]) {
    this._users.next(users);
  }

  public updateCurrentUser(user: User) {
    this._currentUser.next(user);
  }

  public getAllUser(): User[] {
    return this._users.getValue();
  }
}

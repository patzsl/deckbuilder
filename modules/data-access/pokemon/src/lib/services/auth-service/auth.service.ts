import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usernameSource = new BehaviorSubject<string | null>(null);
  username$ = this.usernameSource.asObservable();

  setUsername(username: string) {
    this.usernameSource.next(username);
  }

  isLoggedIn() {
    return this.username$.pipe(map((username) => !!username));
  }
}

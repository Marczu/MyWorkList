import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  autenticate(username: string, password: string) {
    if (username === 'Marczu' && password === 'mojehasło') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
}

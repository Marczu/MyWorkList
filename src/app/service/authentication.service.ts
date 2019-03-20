import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from './data/welcome-data.service';
import {map} from 'rxjs/operators';

export class AuthenticationBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }

  executeBasicAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicAuth`,
      {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('authToken', basicAuthHeaderString);
          return data;
        }
      )
    );
  }


  autenticate(username: string, password: string) {
    if (username === 'Marczu' && password === 'mojehasło') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');;
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('authToken');;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('authToken');
  }
}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'Marczu';
  password: string = 'mojehasło';
  errorMessage: string = 'Nieprawidłowa nazwa użytkownika lub hasło';
  invalidLogin: boolean = false;

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit() {
  }

  handleLogin() {
    // if(this.username === "Marczu" && this.password === "mojehasło")
    if (this.hardcodedAuthenticationService.autenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }
}

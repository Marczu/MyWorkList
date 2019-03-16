import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "Marcc";
  password: string = "";
  errorMessage: string = "Nieprawidłowe dane";

  invalidLogin: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.username === "Marczu" && this.password === "mojehasło"){
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }
}

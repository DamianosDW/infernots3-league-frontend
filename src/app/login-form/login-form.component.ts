import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent
{
  login = '';
  password = '';

  constructor(private appComponent: AppComponent) { }

  logIn() //TODO USE API
  {
    this.appComponent.username = this.login;
    this.appComponent.showInfoContainer = true;
    this.appComponent.showLoginForm = false;
  }

  isButtonDisabled()
  {
    return !(this.login.length > 0 && this.password.length >= 6);
  }
}

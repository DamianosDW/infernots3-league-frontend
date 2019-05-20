import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent
{
  login = '';
  password = '';

  constructor(private appComponent: AppComponent, private httpService: HttpService) { }

  logIn()
  {
    // Check if user can log in
    this.httpService.userCanLogIn(this.login, this.password).subscribe(userLoggedIn => {
      if(userLoggedIn)
      {
        // Get user info
        this.httpService.getUserInfo(this.login).subscribe(userInfo => {
          this.appComponent.userInfo = userInfo;
        });

        // Show main page
        this.appComponent.showInfoContainer = true;
        this.appComponent.showLoginForm = false;
      }
      else
      {
        this.password = '';
        alert('Niepoprawny login/hasło!');
      }
    });
  }

  isButtonDisabled()
  {
    return !(this.login.length > 0 && this.password.length >= 6);
  }
}

import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {HttpService} from "../http.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent
{
  login = '';
  password = '';

  constructor(private appComponent: AppComponent, private router: Router, private httpService: HttpService, private userService: UserService) { }

  logIn()
  {
    // Check if user can log in
    this.httpService.userCanLogIn(this.login, this.password).subscribe(userLoggedIn => {
      if(userLoggedIn)
      {
        // Get user info
        this.httpService.getUserInfo(this.login).subscribe(userInfo => {
          this.userService.saveUserInfo(userInfo);
          // Show main page
          this.router.navigateByUrl('games');
        });
      }
      else
      {
        this.password = '';
        alert('Niepoprawny login/hasło!');
      }
    }, error => {
      this.httpService.showErrorAlert();
    });
  }

  isButtonDisabled()
  {
    return !(this.login.length > 0 && this.password.length >= 6);
  }
}

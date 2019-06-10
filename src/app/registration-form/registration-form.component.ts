import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {HttpService} from "../http.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent
{
  login = '';
  password = '';
  ts3Nickname = '';

  constructor(private appComponent: AppComponent, private router: Router, private httpService: HttpService, private userService: UserService) { }

  createUserAccount()
  {
    this.httpService.createAccount(this.ts3Nickname, this.login, this.password).subscribe(accountCreated => {
      if(accountCreated)
      {
        this.httpService.getUserId(this.login).subscribe(userId => {
          this.userService.saveUserInfo({
            userId: userId,
            username: this.login,
            ts3Nickname: this.ts3Nickname
          });
          // Move to games page
          alert('Konto zostało utworzone!\nUzupełnij nick (zakładka "Profil"), którym posługujesz się w wybranej grze i dołącz do rozgrywek ;)\nPowodzenia!');
          this.router.navigateByUrl('games');
        });
        // this.userService.getUserInfo().setUsername(this.login);
        // this.userService.getUserInfo().setTs3Nickname(this.ts3Nickname);
      }
      else
      {
        alert('Nie udało się utworzyć konta!\nPrawdopodobnie jest już taki login/nick na ts3 w bazie danych!')
      }
    }, error => {
      this.httpService.showErrorAlert();
    });
  }

  isButtonDisabled()
  {
    return !(this.login.length > 0 && this.password.length >= 6 && this.ts3Nickname.length > 0);
  }
}

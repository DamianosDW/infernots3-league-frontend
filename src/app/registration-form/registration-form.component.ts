import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {HttpService} from "../http.service";

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

  constructor(private appComponent: AppComponent, private httpService: HttpService) { }

  createUserAccount()
  {
    this.httpService.createAccount(this.ts3Nickname, this.login, this.password).subscribe(accountCreated =>
    {
      if(accountCreated)
      {
        alert('Konto zostało utworzone!\nUzupełnij nick (zakładka "Profil"), którym posługujesz się w wybranej grze i dołącz do rozgrywek ;)\nPowodzenia!');
        this.appComponent.userInfo.username = this.login;
        this.appComponent.userInfo.ts3Nickname = this.ts3Nickname;
        this.appComponent.showInfoContainer = true;
        this.appComponent.showRegistrationForm = false;
      }
      else
      {
        alert('Nie udało się utworzyć konta!\nPrawdopodobnie jest już taki login/nick na ts3 w bazie danych!')
      }
    });
  }

  isButtonDisabled()
  {
    return !(this.login.length > 0 && this.password.length >= 6 && this.ts3Nickname.length > 0);
  }
}

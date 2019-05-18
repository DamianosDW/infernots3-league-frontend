import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

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

  constructor(private appComponent: AppComponent) { }

  createUserAccount() //TODO USE API
  {
    alert('Konto zostało utworzone!\nUzupełnij nick (zakładka "Profil"), którym posługujesz się w wybranej grze i dołącz do rozgrywek ;)\nPowodzenia!');
  }

  isButtonDisabled()
  {
    return !(this.login.length > 0 && this.password.length >= 6 && this.ts3Nickname.length > 0);
  }
}

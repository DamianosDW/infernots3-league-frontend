import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent
{
  private login: string;
  private password: string;
  private ts3Nickname: string;

  constructor() { }

  createUserAccount()
  {
    alert('Konto zostało utworzone!\nUzupełnij nick (zakładka "Profil"), którym posługujesz się w wybranej grze i dołącz do rozgrywek ;)\nPowodzenia');
  }
}

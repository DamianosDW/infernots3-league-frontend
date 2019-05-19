import { Component } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent
{
  ts3Nickname = '';
  lolNickname = '';
  csgoNickname = '';

  constructor(private appComponent: AppComponent) { }

  updateProfileInfo()
  {
    if(this.ts3Nickname.length > 0 || (this.lolNickname.length > 0 || this.csgoNickname.length > 0))
    {
      //TODO SAVE PROFILE INFO TO DB BY USING API
    }
  }
}

import { Component } from '@angular/core';
import {AppComponent, UserInfo} from "../app.component";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent
{
  ts3Nickname = this.appComponent.userInfo.ts3Nickname;
  lolNickname = this.appComponent.userInfo.lolNickname;
  csgoNickname = this.appComponent.userInfo.csgoNickname;
  updatedUserInfo: UserInfo;

  constructor(private appComponent: AppComponent, private httpService: HttpService) { }

  updateProfileInfo()
  {
    if(this.ts3Nickname.length > 0 || (this.lolNickname.length > 0 || this.csgoNickname.length > 0))
    {
      // Prepare necessary data
      this.updatedUserInfo = {
        userId: this.appComponent.userInfo.userId,
        username: this.appComponent.userInfo.username,
        ts3Nickname:  this.ts3Nickname,
        lolNickname: this.lolNickname,
        csgoNickname: this.csgoNickname
      };

      this.httpService.updateUserInfo(this.updatedUserInfo).subscribe(userInfoUpdated => {
        if(userInfoUpdated)
        {
          this.appComponent.userInfo.ts3Nickname = this.ts3Nickname;
          this.appComponent.userInfo.lolNickname = this.lolNickname;
          this.appComponent.userInfo.csgoNickname = this.csgoNickname;
          alert("Zaktualizowano profil!");
        }
        else
          alert("Nie udało się zaktualizować profilu! Spróbuj ponownie później.");
      });
    }
  }
}

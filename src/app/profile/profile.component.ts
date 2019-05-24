import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {HttpService} from "../http.service";
import {UserService} from "../user.service";
import {UserInfo} from "../user-info";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent
{
  ts3Nickname = this.userService.getUserInfo().getTs3Nickname();
  lolNickname = (this.userService.getUserInfo().getLolNickname() !== 'null') ? this.userService.getUserInfo().getLolNickname(): '';
  csgoNickname = (this.userService.getUserInfo().getCsgoNickname() !== 'null') ? this.userService.getUserInfo().getCsgoNickname() : '';
  updatedUserInfo: UserInfo;

  constructor(private appComponent: AppComponent, private httpService: HttpService, private userService: UserService) { }

  updateProfileInfo()
  {
    if(this.ts3Nickname.length > 0 || (this.lolNickname.length > 0 || this.csgoNickname.length > 0))
    {
      // Prepare necessary data
      this.updatedUserInfo = new UserInfo(this.userService.getUserInfo().getUserId(), this.userService.getUserInfo().getUsername(), this.ts3Nickname, this.lolNickname, this.csgoNickname);

      this.httpService.updateUserInfo(this.updatedUserInfo).subscribe(userInfoUpdated => {
        if(userInfoUpdated)
        {
          this.userService.clearSessionStorage();
          this.userService.saveUserInfo(this.updatedUserInfo);
          alert("Zaktualizowano profil!");
        }
        else
          alert("Nie udało się zaktualizować profilu! Spróbuj ponownie później.");
      });
    }
  }
}

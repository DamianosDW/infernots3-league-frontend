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
  username = this.userService.getUserInfo().username;
  ts3Nickname = this.userService.getUserInfo().ts3Nickname;
  lolNickname = (this.userService.getUserInfo().lolNickname !== 'undefined' && this.userService.getUserInfo().lolNickname !== 'null') ? this.userService.getUserInfo().lolNickname: '';
  csgoNickname = (this.userService.getUserInfo().csgoNickname !== 'undefined' && this.userService.getUserInfo().csgoNickname !== 'null') ? this.userService.getUserInfo().csgoNickname : '';

  constructor(private appComponent: AppComponent, private httpService: HttpService, private userService: UserService) { }

  updateProfileInfo()
  {
    if((this.username.length > 0 && this.ts3Nickname.length > 0) && (this.lolNickname.length > 0 || this.csgoNickname.length > 0))
    {
      // Prepare necessary data
      let updatedUserInfo: UserInfo = {};
      updatedUserInfo.userId = this.userService.getUserInfo().userId;
      updatedUserInfo.username = this.username;
      updatedUserInfo.ts3Nickname = this.ts3Nickname;
      updatedUserInfo.lolNickname = (this.lolNickname === '') ? null : this.lolNickname;
      updatedUserInfo.csgoNickname = (this.csgoNickname === '') ? null : this.csgoNickname;

      this.httpService.updateUserInfo(updatedUserInfo).subscribe(userInfoUpdated => {
        if(userInfoUpdated)
        {
          this.userService.clearSessionStorage();
          this.userService.saveUserInfo(updatedUserInfo);
          alert('Zaktualizowano profil!');
        }
        else
          alert('Nie udało się zaktualizować profilu! Spróbuj ponownie później.');
      });
    }
    else
      alert('Nie podałeś/aś nazwy w grze!');
  }
}

import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {UserInfo} from "./user-info";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  public saveUserInfo(userInfo: UserInfo)
  {
    sessionStorage.setItem('userId', userInfo.getUserId() + '');
    sessionStorage.setItem('username', userInfo.getUsername());
    sessionStorage.setItem('ts3Nickname', userInfo.getTs3Nickname());
    sessionStorage.setItem('lolNickname', userInfo.getLolNickname());
    sessionStorage.setItem('csgoNickname', userInfo.getCsgoNickname());
  }

  public getUserInfo(): UserInfo | null
  {
    let userId = sessionStorage.getItem('userId');
    let username = sessionStorage.getItem('username');
    let ts3Nickname = sessionStorage.getItem('ts3Nickname');
    let lolNickname = sessionStorage.getItem('lolNickname');
    let csgoNickname = sessionStorage.getItem('csgoNickname');

    if(userId !== null && username !== null && ts3Nickname !== null && lolNickname !== null && csgoNickname !== null)
    {
      return new UserInfo(parseInt(userId), username, ts3Nickname, lolNickname, csgoNickname);
    }

    return null;
  }

  public clearSessionStorage()
  {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('ts3Nickname');
    sessionStorage.removeItem('lolNickname');
    sessionStorage.removeItem('csgoNickname');
  }
}

import { Injectable } from '@angular/core';
import {UserInfo} from "./user-info";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public saveUserInfo(userInfo: UserInfo)
  {
    // sessionStorage.setItem('userId', userInfo.getUserId() + '');
    // sessionStorage.setItem('username', userInfo.getUsername());
    // sessionStorage.setItem('ts3Nickname', userInfo.getTs3Nickname());
    // sessionStorage.setItem('lolNickname', userInfo.getLolNickname());
    // sessionStorage.setItem('csgoNickname', userInfo.getCsgoNickname());
    sessionStorage.setItem('userId', userInfo.userId + '');
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('ts3Nickname', userInfo.ts3Nickname);
    sessionStorage.setItem('lolNickname', userInfo.lolNickname);
    sessionStorage.setItem('leaguePoints', '-');
  }

  public getUserInfo(): UserInfo | null
  {
    let userId = sessionStorage.getItem('userId');
    let username = sessionStorage.getItem('username');
    let ts3Nickname = sessionStorage.getItem('ts3Nickname');
    let lolNickname = sessionStorage.getItem('lolNickname');

    if(userId !== null && username !== null && ts3Nickname !== null && lolNickname !== null)
    {
      return {
        userId: parseInt(userId),
        username: username,
        ts3Nickname: ts3Nickname,
        lolNickname: lolNickname,
      };
    }

    return null;
  }

  public getUserLeaguePoints()
  {
    return sessionStorage.getItem('leaguePoints');
  }

  public setUserLeaguePoints(points: number)
  {
    sessionStorage.setItem('leaguePoints', points + '')
  }

  public clearSessionStorage()
  {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('ts3Nickname');
    sessionStorage.removeItem('lolNickname');
    sessionStorage.removeItem('leaguePoints');
  }
}

import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Inferno TS3 League';
  userInfo: UserInfo = {username: ''};

  constructor(private router: Router) { }

  showStartPage()
  {
    this.router.navigateByUrl('start');
  }

  showGamesPage()
  {
    this.router.navigateByUrl('games');
  }

  //TODO MOVE THIS TO NEW COMPONENT

  showProfilePage()
  {
    this.router.navigateByUrl('profile');
  }

  logOut()
  {
    this.userInfo.username = '';
    this.router.navigateByUrl('start');
  }
  //TODO MOVE THIS TO NEW COMPONENT
}

export interface UserInfo
{
  userId?: number;
  username?: string;
  ts3Nickname?: string;
  lolNickname?: string;
  csgoNickname?: string;
}

import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Inferno TS3 League';
  leagueOfLegendsLogo = '../assets/images/lol-logo.png';
  csgoLogo = '../assets/images/csgo-logo.png';
  showInfoContainer = true;
  showLeagueOfLegends = false;
  showCSGO = false;
  showRegistrationForm = false;
  showLoginForm = false;
  showProfile = false;
  userInfo: UserInfo = {username: ''};
  showMatchSchedule = false;
  showLiveStream = false;

  constructor() { }

  showInfoContainerPage()
  {
    this.showInfoContainer = true;
    this.showLeagueOfLegends = false;
    this.showCSGO = false;
    this.showRegistrationForm = false;
    this.showLoginForm = false;
    this.showProfile = false;
    this.showMatchSchedule = false;
    this.showLiveStream = false;
  }

  //TODO MOVE THIS TO NEW COMPONENT
  showLoginFormPage()
  {
    this.showInfoContainer = false;
    this.showLoginForm = true;
  }

  showRegisterForm()
  {
    this.showInfoContainer = false;
    this.showRegistrationForm = true;
  }

  showProfilePage()
  {
    this.showProfile = true;
    this.showInfoContainer = false;
    this.showLeagueOfLegends = false;
    this.showCSGO = false;
    this.showMatchSchedule = false;
    this.showLiveStream = false;
  }

  logOut()
  {
    this.userInfo.username = '';
    this.showInfoContainer = true;
    this.showLeagueOfLegends = false;
    this.showCSGO = false;
    this.showProfile = false;
    this.showMatchSchedule = false;
    this.showLiveStream = false;
  }
  //TODO MOVE THIS TO NEW COMPONENT

  showMatchSchedulePage()
  {
    this.showInfoContainer = false;
    this.showMatchSchedule = true;
  }

  showLiveStreamPage()
  {
    this.showInfoContainer = false;
    this.showLiveStream = true;
    this.showLeagueOfLegends = false;
    this.showCSGO = false;
  }

  showLeagueOfLegendsPage()
  {
    this.showLeagueOfLegends = true;
    this.showCSGO = false;
    this.showInfoContainer = false;
  }

  showCSGOPage()
  {
    this.showCSGO = true;
    this.showLeagueOfLegends = false;
    this.showInfoContainer = false;
  }
}

export interface UserInfo
{
  userId?: number;
  username?: string;
  ts3Nickname?: string;
  lolNickname?: string;
  csgoNickname?: string;
}

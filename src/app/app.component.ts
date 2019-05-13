import { Component } from '@angular/core';

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
  username = '';
  team = '-';

  showInfoContainerPage()
  {
    this.showInfoContainer = true;
    this.showLeagueOfLegends = false;
    this.showCSGO = false;
  }

  //TODO MOVE THIS TO NEW COMPONENT
  showLoginForm()
  {
    this.username = 'DamianosDW';
  }

  showRegisterForm()
  {

  }

  logOut()
  {
    this.username = '';
    this.team = '-';
    this.showInfoContainer = true;
    this.showLeagueOfLegends = false;
    this.showCSGO = false;
  }
  //TODO MOVE THIS TO NEW COMPONENT


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

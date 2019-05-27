import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";
import {UserStats} from "../userstats";
import {HttpService} from "../http.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit
{

  leagueOfLegendsLogo = '../../assets/images/lol-logo.png';
  csgoLogo = '../../assets/images/csgo-logo.png';

  constructor(private appComponent: AppComponent, private router: Router, private httpService: HttpService, private userService: UserService) { }

  ngOnInit() {
  }

  showLeagueOfLegendsPage()
  {
    // Set user league points and redirect to lol page
    this.httpService.getUserStats(this.userService.getUserInfo().ts3Nickname).subscribe(userStatsData => {
      let userStats: UserStats = userStatsData;

      this.userService.setUserLeaguePoints(userStats.leaguePoints);
      this.router.navigateByUrl('leagueoflegends');
    });
  }

  showCSGOPage()
  {
    // Set user league points and redirect to csgo page
    this.httpService.getUserStats(this.userService.getUserInfo().ts3Nickname).subscribe(userStatsData => {
      let userStats: UserStats = userStatsData;

      this.userService.setUserLeaguePoints(userStats.leaguePoints);
      this.router.navigateByUrl('csgo');
    });
  }

}

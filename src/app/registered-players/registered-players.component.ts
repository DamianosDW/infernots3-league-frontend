import { Component, OnInit } from '@angular/core';
import {UserStats} from "../userstats";
import {HttpService} from "../http.service";
import {UserInfo} from "../user-info";

@Component({
  selector: 'app-registered-players',
  templateUrl: './registered-players.component.html',
  styleUrls: ['./registered-players.component.css']
})
export class RegisteredPlayersComponent implements OnInit
{
  userStats: Array<UserStats> = [{}];

  constructor(private httpService: HttpService) { }

  ngOnInit()
  {
    this.getUserStats();
  }

  getUserStats(): Array<UserStats> | null
  {
    this.httpService.getRanking().subscribe(userStats => {
      this.userStats = userStats;

      // Change User object to ts3 nickname
      let user, ts3Nickname;
      for(let i = 0; i < userStats.length; i++)
      {
        user = this.userStats[i].user as UserInfo;
        ts3Nickname = user.ts3Nickname;
        this.userStats[i].user = ts3Nickname;
      }
    });
    return this.userStats;

  }
}

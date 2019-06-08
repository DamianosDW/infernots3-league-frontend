import {Component} from '@angular/core';
import { AppComponent } from "../app.component";
import {Router} from "@angular/router";
import {HttpService} from "../http.service";
import {UserService} from "../user.service";
import {UserInfo} from "../user-info";
import {Match} from "../match";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css']
})
export class LolComponent
{
  constructor(private appComponent: AppComponent, private router: Router, private userService: UserService, private httpService: HttpService) { }

  joinGames()
  {
    let userId = this.userService.getUserInfo().userId;

    this.httpService.getUserStats(this.userService.getUserInfo().ts3Nickname).subscribe(userStats => {
      // Check if user participates in tournament
      if(!userStats.participatesInTournament)
      {
        this.httpService.setUserParticipationInTournament(userId).subscribe(userJoined => {
          if(userJoined)
          {
            let opponent: UserInfo = null;
            this.httpService.getOpponent(this.userService.getUserInfo().userId).subscribe(userInfo => {
              opponent = userInfo;

              // Create match
              if(opponent !== null)
              {
                let match: Match = this.prepareMatchAndOpponent(opponent);

                // Prepare data in proper format
                let matchStartDateInProperFormat: string = this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getDate()) + '.' + this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getMonth()) + '.' + this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getFullYear());
                let matchStartTimeInProperFormat: string = this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getHours()) + ':' + this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getMinutes());

                alert('Dołączyłeś/aś do rozgrywek!\nTwój następny mecz odbędzie się ' + matchStartDateInProperFormat + ' o godzinie ' + matchStartTimeInProperFormat + '.\nNick gracza (TS3), z którym się zmierzysz to: ' + opponent.ts3Nickname + '.');
              }
              else
              {
                alert('Dołączyłeś/aś do rozgrywek, ale nie dostałeś/aś przeciwnika!\nSkorzystaj z przycisku \'Znajdź przeciwnika\', aby serwis wylosował odpowiedniego gracza do walki.');
              }

              // Refresh match-schedule component
              this.router.navigateByUrl('schedule', {skipLocationChange: true}).then(()=>
                this.router.navigate(["leagueoflegends"]));
              // Refresh registered-players component
              this.router.navigateByUrl('ranking', {skipLocationChange: true}).then(()=>
                this.router.navigate(["leagueoflegends"]));
            });
          }
          else
          {
            if(this.userService.getUserInfo().lolNickname === 'null' || this.userService.getUserInfo().lolNickname === 'undefined')
              alert('Nie udało się dołączyć do rozgrywek (problem z nickiem w grze)!\nPopraw nick w grze (zakładka "Profil") i spróbuj ponownie.');
            else
              alert('Nie udało się dołączyć do rozgrywek! Spróbuj ponownie później.');
          }
        });
      }
      else
        alert('Dołączyłeś/aś już do rozgrywek!');
    });
  }

  getOpponent()
  {
    this.httpService.getUserStats(this.userService.getUserInfo().ts3Nickname).subscribe(userStats => {
      // Check if user participates in tournament
      if(userStats !== null && userStats.participatesInTournament)
      {
        this.httpService.getNextMatch(this.userService.getUserInfo().userId).subscribe(nextMatch => {
          if(nextMatch === null)
          {
            this.httpService.getOpponent(this.userService.getUserInfo().userId).subscribe(opponent => {
              if(opponent !== null)
              {
                let match: Match = this.prepareMatchAndOpponent(opponent);

                // Prepare data in proper format
                let matchStartDateInProperFormat: string = this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getDate()) + '.' + this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getMonth()) + '.' + this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getFullYear());
                let matchStartTimeInProperFormat: string = this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getHours()) + ':' + this.appComponent.convertDateNumberToProperFormat(match.matchStartDate.getMinutes());

                alert('Wylosowano przeciwnika!\nNick gracza (TS3), z którym się zmierzysz to: ' + opponent.ts3Nickname + '.\nMecz odbędzie się ' + matchStartDateInProperFormat + ' o godzinie ' + matchStartTimeInProperFormat + '.');
              }
              else
              {
                alert('Nie wylosowano przeciwnika, ponieważ pozostali gracze zostali już przydzieleni do rozgrywek!\nSpróbuj ponownie później.');
              }
            });
            // Refresh match-schedule component
            this.router.navigateByUrl('schedule', {skipLocationChange: true}).then(()=>
              this.router.navigate(["leagueoflegends"]));
            // Refresh registered-players component
            this.router.navigateByUrl('ranking', {skipLocationChange: true}).then(()=>
              this.router.navigate(["leagueoflegends"]));
          }
          else
          {
            alert('Masz już przeciwnika!');
          }
        });
      }
      else
      {
        alert('Nie możesz wylosować przeciwnika, ponieważ nie dołączyłeś/aś do rozgrywek!');
      }
    });
  }

  prepareMatchAndOpponent(opponent: UserInfo): Match
  {
    let currentDateTime = new Date();

    // Prepare match start dates
    let firstMatchStartDate = new Date();
    firstMatchStartDate.setHours(18, 0, 0);
    let secondMatchStartDate = new Date();
    secondMatchStartDate.setHours(19, 0, 0);
    let thirdMatchStartDate = new Date();
    thirdMatchStartDate.setHours(20, 0, 0);
    let fourthMatchStartDate = new Date();
    fourthMatchStartDate.setHours(21, 0, 0);
    let fifthMatchStartDate = new Date();
    fifthMatchStartDate.setHours(22, 0, 0);

    let matchStartDates: Array<Date> = [firstMatchStartDate, secondMatchStartDate, thirdMatchStartDate, fourthMatchStartDate, fifthMatchStartDate];

    // Get current matches start dates
    let currentMatchesStartDates: Array<Date> = [];
    this.httpService.getCurrentMatchesStartDates()
      .toPromise()
      .then(matchStartDate => {
        matchStartDate.forEach(value => {
          currentMatchesStartDates.push(value);
        });
      });

    // Get random match start date
    let matchStartDate;

    do {
      matchStartDate = matchStartDates[Math.floor(Math.random() * matchStartDates.length)];

      if(matchStartDate < currentDateTime)
      {
        matchStartDate.setDate(matchStartDate.getDate() + 1);
      }
    } while(currentMatchesStartDates.includes(matchStartDate));

    // Get logged in user info
    let loggedInUserInfo = this.userService.getUserInfo();

    // Prepare match
    let match: Match = {
      matchStartDate: matchStartDate,
      firstPlayer: {
        userId: loggedInUserInfo.userId,
        username: loggedInUserInfo.username,
        ts3Nickname: loggedInUserInfo.ts3Nickname,
        lolNickname: loggedInUserInfo.lolNickname,
      },
      secondPlayer: opponent,
      firstPlayerScore: 0,
      secondPlayerScore: 0,
      bo3: false,
      matchEnded: false
    };

    this.httpService.createMatch(match).subscribe();

    return match;
  }

  showLiveStreamPage()
  {
    this.router.navigateByUrl('live');
  }
}

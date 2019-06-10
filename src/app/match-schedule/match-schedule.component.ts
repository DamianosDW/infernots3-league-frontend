import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {HttpService} from "../http.service";
import {Match} from "../match";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-match-schedule',
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.css']
})
export class MatchScheduleComponent
{
  matches: Array<Match> = [];
  matchStartDates: Array<Date> = [];
  currentDateTime: Date = new Date();

  constructor(private appComponent: AppComponent, private httpService: HttpService, private userService: UserService, private router: Router)
  {
    this.httpService.getCurrentMatches().subscribe(currentMatches => {
      this.matches = currentMatches;

      // Convert match start dates to proper format (dd.MM.yyyy HH:mm)
      this.matches.forEach((match, index) => {
        this.matchStartDates[index] = new Date(match.matchStartDate[0] + '.' + match.matchStartDate[1] + '.' + match.matchStartDate[2] + ' ' + match.matchStartDate[3] + ':' + match.matchStartDate[4] + '0');
      });
    }, error => {
      this.httpService.showErrorAlert();
    });
  }

  addPointToP1(matchId: number, userId: number)
  {
    this.httpService.addLeaguePoint(matchId, userId, 1).subscribe(success => {
      if(success)
      {
        // Refresh match-schedule component
        this.router.navigateByUrl('schedule', {skipLocationChange: true}).then(()=>
          this.router.navigate(["leagueoflegends"]));
        // Refresh registered-players component
        this.router.navigateByUrl('ranking', {skipLocationChange: true}).then(()=>
          this.router.navigate(["leagueoflegends"]));
      }
      else
        alert('Nie udało się zmienić liczby punktów!');
    }, error => {
      this.httpService.showErrorAlert();
    });
  }

  removePointFromP1(matchId: number, userId: number)
  {
    this.httpService.removeLeaguePoint(matchId, userId, 1).subscribe(success => {
      if(success)
      {
        // Refresh match-schedule component
        this.router.navigateByUrl('schedule', {skipLocationChange: true}).then(()=>
          this.router.navigate(["leagueoflegends"]));
        // Refresh registered-players component
        this.router.navigateByUrl('ranking', {skipLocationChange: true}).then(()=>
          this.router.navigate(["leagueoflegends"]));
      }
      else
        alert('Nie udało się zmienić liczby punktów!');
    }, error => {
      this.httpService.showErrorAlert();
    });

  }

  addPointToP2(matchId: number, userId: number)
  {
    this.httpService.addLeaguePoint(matchId, userId, 2).subscribe(success => {
      if(success)
      {
        // Refresh match-schedule component
        this.router.navigateByUrl('schedule', {skipLocationChange: true}).then(()=>
          this.router.navigate(["leagueoflegends"]));
        // Refresh registered-players component
        this.router.navigateByUrl('ranking', {skipLocationChange: true}).then(()=>
          this.router.navigate(["leagueoflegends"]));
      }
      else
        alert('Nie udało się zmienić liczby punktów!');
    }, error => {
      this.httpService.showErrorAlert();
    });
  }

  removePointFromP2(matchId: number, userId: number)
  {
    this.httpService.removeLeaguePoint(matchId, userId, 2).subscribe(success => {
        if(success)
        {
          // Refresh match-schedule component
          this.router.navigateByUrl('schedule', {skipLocationChange: true}).then(()=>
            this.router.navigate(["leagueoflegends"]));
          // Refresh registered-players component
          this.router.navigateByUrl('ranking', {skipLocationChange: true}).then(()=>
            this.router.navigate(["leagueoflegends"]));
        }
        else
          alert('Nie udało się zmienić liczby punktów!');
      }, error => {
      this.httpService.showErrorAlert();
    });
  }

  endMatch(matchId: number)
  {
    this.httpService.endMatch(matchId).subscribe(success => {
      if(success)
      {
        // Refresh match-schedule component
        this.router.navigateByUrl('schedule', {skipLocationChange: true}).then(()=>
          this.router.navigate(["leagueoflegends"]));
        // Refresh registered-players component
        this.router.navigateByUrl('ranking', {skipLocationChange: true}).then(()=>
          this.router.navigate(["leagueoflegends"]));
      }
      else
        alert('Nie udało się zakończyć meczu!');
    }, error => {
      this.httpService.showErrorAlert();
    });
  }
}

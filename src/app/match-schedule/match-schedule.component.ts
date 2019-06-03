import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {HttpService} from "../http.service";
import {Match} from "../match";
import {UserService} from "../user.service";

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

  constructor(private appComponent: AppComponent, private httpService: HttpService, private userService: UserService)
  {
    this.httpService.getCurrentMatches().subscribe(currentMatches => {
      this.matches = currentMatches;

      // Convert match start dates to proper format (dd.MM.yyyy HH:mm)
      this.matches.forEach((match, index) => {
        this.matchStartDates[index] = new Date(match.matchStartDate[0] + '.' + match.matchStartDate[1] + '.' + match.matchStartDate[2] + ' ' + match.matchStartDate[3] + ':' + match.matchStartDate[4] + '0');
      });
    });
  }
}

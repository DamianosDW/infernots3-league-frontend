import { Component } from '@angular/core';

@Component({
  selector: 'app-match-schedule',
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.css']
})
export class MatchScheduleComponent
{
  matches: Array<Match>;

  constructor()
  {
    this.matches = [new Match(new Date(), 'Gracz #1', 'Gracz #3'), new Match(new Date(), 'Gracz #5', 'Gracz #2')];
  }

  showPlayerStats()
  {

  }
}

class Match
{
  public date: Date;
  public firstPlayer: string;
  public secondPlayer: string;

  constructor(date: Date, firstPlayer: string, secondPlayer: string)
  {
    this.date = date;
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
  }
}

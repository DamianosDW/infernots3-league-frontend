import { Component } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css']
})
export class LolComponent
{
  showMatchSchedule = true;
  showNews = false;

  constructor(private appComponent: AppComponent) { }

  joinGames()
  {
    console.log('Joined ;)');
  }

  showNewsPage()
  {
    this.showNews = true;
    this.showMatchSchedule = false;
  }

  showMatchSchedulePage()
  {
    this.showMatchSchedule = true;
    this.showNews = false;
  }



}

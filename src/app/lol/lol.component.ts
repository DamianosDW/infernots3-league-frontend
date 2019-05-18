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
    alert("Dołączyłeś/aś do rozgrywek!\nTwój następny mecz odbędzie się --.--.---- o godzinie --:--.\nNick gracza, z którym się zmieszysz to: nick_gracza.");
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

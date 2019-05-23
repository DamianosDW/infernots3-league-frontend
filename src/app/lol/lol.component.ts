import { Component } from '@angular/core';
import { AppComponent } from "../app.component";
import {StartPageComponent} from "../start-page/start-page.component";

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css']
})
export class LolComponent
{
  showMatchSchedule = true;
  showLiveStream = false;

  constructor(private appComponent: AppComponent, private startPageComponent: StartPageComponent) { }

  joinGames() //TODO USE API TO GET PROPER DATA
  {
    console.log('Joined ;)');
    alert("Dołączyłeś/aś do rozgrywek!\nTwój następny mecz odbędzie się --.--.---- o godzinie --:--.\nNick gracza, z którym się zmierzysz to: nick_gracza.");
  }

  showMatchSchedulePage()
  {
    this.showMatchSchedule = true;
    this.showLiveStream = false;
  }



}

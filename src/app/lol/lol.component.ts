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
  showLiveStream = false;

  constructor(private appComponent: AppComponent) { }

  joinGames() //TODO USE API TO GET PROPER DATA
  {
    console.log('Joined ;)');
    alert("Dołączyłeś/aś do rozgrywek!\nTwój następny mecz odbędzie się --.--.---- o godzinie --:--.\nNick gracza, z którym się zmieszysz to: nick_gracza.");
  }

  showMatchSchedulePage()
  {
    this.showMatchSchedule = true;
    this.showLiveStream = false;
  }



}

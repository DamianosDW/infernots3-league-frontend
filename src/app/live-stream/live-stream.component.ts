import { Component } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent
{
  showChat = true;
  showStats = false;

  constructor(private appComponent: AppComponent) { }

  showChatView()
  {
    this.showChat = true;
    this.showStats = false;
  }

  showStatsView()
  {
    this.showStats = true;
    this.showChat = false;
  }
}

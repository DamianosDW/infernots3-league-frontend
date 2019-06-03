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

  constructor(private appComponent: AppComponent) { }

  showChatView()
  {
    this.showChat = true;
  }
}

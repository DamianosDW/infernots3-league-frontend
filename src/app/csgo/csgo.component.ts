import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-csgo',
  templateUrl: './csgo.component.html',
  styleUrls: ['./csgo.component.css']
})
export class CsgoComponent
{
  constructor(private appComponent: AppComponent) { }

}

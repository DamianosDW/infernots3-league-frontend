import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit
{

  leagueOfLegendsLogo = '../../assets/images/lol-logo.png';
  csgoLogo = '../../assets/images/csgo-logo.png';

  constructor(private appComponent: AppComponent, private router: Router) { }

  ngOnInit() {
  }

  showLeagueOfLegendsPage()
  {
    this.router.navigateByUrl('leagueoflegends');
  }

  showCSGOPage()
  {
    this.router.navigateByUrl('csgo');
  }

}

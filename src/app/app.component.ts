import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Inferno TS3 League';

  constructor(private router: Router, private userService: UserService) { }

  showStartPage()
  {
    this.router.navigateByUrl('start');
  }

  showGamesPage()
  {
    this.router.navigateByUrl('games');
  }

  //TODO MOVE THIS TO NEW COMPONENT

  showProfilePage()
  {
    this.router.navigateByUrl('profile');
  }

  logOut()
  {
    this.userService.clearSessionStorage();
    this.router.navigateByUrl('start');
  }
  //TODO MOVE THIS TO NEW COMPONENT

  convertDateNumberToProperFormat(number: number): string
  {
    if(number === 0)
    {
      return number + '0';
    }
    else if(number > 0 && number < 10)
      return '0' + number;
    else
      return number + '';
  }
}

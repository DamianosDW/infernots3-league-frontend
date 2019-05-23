import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit
{

  constructor(private appComponent: AppComponent, private router: Router) { }

  ngOnInit() {
  }

  showLoginFormPage()
  {
    this.router.navigateByUrl('login');
  }

  showRegisterForm()
  {
    this.router.navigateByUrl('register');
  }

  showMatchSchedulePage()
  {
    this.router.navigateByUrl('schedule');
  }

  showLiveStreamPage()
  {
    this.router.navigateByUrl('live');
  }

}

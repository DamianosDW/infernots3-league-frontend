import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LolComponent } from './lol/lol.component';
import { CsgoComponent } from './csgo/csgo.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from "@angular/router";
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';
import { RegisteredPlayersComponent } from './registered-players/registered-players.component';

const appRoutes: Routes = [
  { path: 'leagueoflegends', component: LolComponent },
  { path: 'csgo', component: CsgoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LolComponent,
    CsgoComponent,
    FooterComponent,
    MatchScheduleComponent,
    RegisteredPlayersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginFormComponent} from "./login-form/login-form.component";
import {LolComponent} from "./lol/lol.component";
import {CsgoComponent} from "./csgo/csgo.component";
import {LiveStreamComponent} from "./live-stream/live-stream.component";
import {MatchScheduleComponent} from "./match-schedule/match-schedule.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {ProfileComponent} from "./profile/profile.component";
import {StartPageComponent} from "./start-page/start-page.component";
import {GamesComponent} from "./games/games.component";

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "leagueoflegends", component: LolComponent },
  { path: "csgo", component: CsgoComponent },
  { path: "live", component: LiveStreamComponent },
  { path: "schedule", component: MatchScheduleComponent },
  { path: "register", component: RegistrationFormComponent },
  { path: "profile", component: ProfileComponent },
  { path: "start", component: StartPageComponent },
  { path: "games", component: GamesComponent },
  { path: "**", redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

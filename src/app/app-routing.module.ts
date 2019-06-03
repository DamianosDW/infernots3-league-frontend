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
import {AuthorizationGuard} from "./authorization.guard";
import {RegisteredPlayersComponent} from "./registered-players/registered-players.component";
import {RedirectionGuard} from "./redirection-guard";

const routes: Routes = [
  { path: "login", component: LoginFormComponent, canActivate: [RedirectionGuard] },
  { path: "leagueoflegends", component: LolComponent, canActivate: [AuthorizationGuard] },
  { path: "csgo", component: CsgoComponent, canActivate: [AuthorizationGuard] },
  { path: "live", component: LiveStreamComponent },
  { path: "schedule", component: MatchScheduleComponent },
  { path: "ranking", component: RegisteredPlayersComponent },
  { path: "register", component: RegistrationFormComponent, canActivate: [RedirectionGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthorizationGuard] },
  { path: "start", component: StartPageComponent, canActivate: [RedirectionGuard] },
  { path: "games", component: GamesComponent, canActivate: [AuthorizationGuard] },
  { path: "**", redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

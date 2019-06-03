import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LolComponent } from './lol/lol.component';
import { CsgoComponent } from './csgo/csgo.component';
import { FooterComponent } from './footer/footer.component';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';
import { RegisteredPlayersComponent } from './registered-players/registered-players.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormsModule } from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./http.service";
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './games/games.component';
import { StartPageComponent } from './start-page/start-page.component';
import {UserService} from "./user.service";
import {AuthorizationGuard} from "./authorization.guard";
import {RedirectionGuard} from "./redirection-guard";

@NgModule({
  declarations: [
    AppComponent,
    LolComponent,
    CsgoComponent,
    FooterComponent,
    MatchScheduleComponent,
    RegisteredPlayersComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    LiveStreamComponent,
    ProfileComponent,
    GamesComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpService,
    UserService,
    AuthorizationGuard,
    RedirectionGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

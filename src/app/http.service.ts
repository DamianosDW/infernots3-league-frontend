import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {UserInfo} from "./user-info";
import {UserStats} from "./userstats";
import {Match} from "./match";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  userCanLogIn(login: string, password: string)
  {
    return this.httpClient.post<boolean>('http://localhost:8080/api/users/login', {
      login: login,
      password: password
    });
  }

  getUserInfo(login: string)
  {
    return this.httpClient.get<UserInfo>('http://localhost:8080/api/users/' + login + '/info');
  }

  createAccount(ts3Nickname: string, login: string, password: string)
  {
    return this.httpClient.put('http://localhost:8080/api/users/create', {
      username: login,
      password: password,
      ts3Nickname: ts3Nickname
    });
  }

  updateUserInfo(userInfo: UserInfo)
  {
    return this.httpClient.put('http://localhost:8080/api/users/info/update', userInfo);
  }

  getRanking()
  {
    return this.httpClient.get<Array<UserStats>>('http://localhost:8080/api/userstats/ranking');
  }
  
  getUserStats(ts3Nickname: string)
  {
    return this.httpClient.get<UserStats>('http://localhost:8080/api/userstats/' + ts3Nickname);
  }

  setUserParticipationInTournament(userId: number)
  {
    return this.httpClient.put<boolean>('http://localhost:8080/api/userstats/update/participation/' + userId, null);
  }

  getUserId(username: string)
  {
    return this.httpClient.get<number>('http://localhost:8080/api/users/' + username + '/userId');
  }

  getOpponent(userId: number)
  {
    return this.httpClient.get<UserInfo>('http://localhost:8080/api/matches/user/' + userId + '/opponent');
  }

  createMatch(match: Match)
  {
    return this.httpClient.post('http://localhost:8080/api/matches/create', match);
  }

  getCurrentMatches()
  {
    return this.httpClient.get<Array<Match>>('http://localhost:8080/api/matches');
  }

  getNextMatch(userId: number)
  {
    return this.httpClient.get<Match>('http://localhost:8080/api/matches/' + userId + '/nextMatch');
  }

  getAllLolNicknames()
  {
    return this.httpClient.get<Array<string>>('http://localhost:8080/api/userstats/lolNicknames');
  }


}

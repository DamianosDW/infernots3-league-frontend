import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  userCanLogIn(login: string, password: string)
  {
    return this.httpClient.post<boolean>('http://localhost:8080/api/users/logIn', {
      login: login,
      password: password
    });
  }

  getUserInfo(login: string)
  {
    return this.httpClient.get('http://localhost:8080/api/users/' + login + '/info');
  }


}

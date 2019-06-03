import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class RedirectionGuard implements CanActivate
{
  constructor(private router: Router, private userService: UserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.getUserInfo() !== null && this.userService.getUserInfo().username !== null)
    {
      this.router.navigateByUrl('games');
      return false;
    }
    return true;
  }
}

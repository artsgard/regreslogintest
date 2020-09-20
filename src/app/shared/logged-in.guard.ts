import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, RouteConfigLoadEnd, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { ILoginService } from './service/i.login.service';


@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
  constructor(public authService: ILoginService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {

    let auth: boolean;
    this.authService.isAuth().subscribe(data => {
      auth = data;
    });

    return auth;
  }

}

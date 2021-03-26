import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

const appSettings = require("tns-core-modules/application-settings");

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if (true) {
      return true
    } else {
      appSettings.setString("redirectUrl", url);
      this._router.navigate(['/login-options'])
      return false
    }
  }


}

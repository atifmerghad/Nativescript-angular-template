import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, switchMap, finalize, filter, take } from 'rxjs/operators';
import { of, BehaviorSubject, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { Color } from 'tns-core-modules/color';
import localize from 'nativescript-localize';
import { RouterExtensions } from '@nativescript/angular';


var appSettings = require("application-settings");

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private auth: AuthService, private routerExtensions: RouterExtensions) {
  }

  intercept(req, next) {

    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone(
      {
        // headers: req.headers.set('Authorization', 'Bearer ' + authService.getToken())
      }
    )

    return next.handle(tokenizedReq)
    /* next.handle(tokenizedReq).pipe(
      catchError((err, caught) => {
        if (err.status === 401) {
          this.auth.logoutUser();
          return of(err);
        }
        throw err;
      }
      )
    );
    
  }
*/

  }


}

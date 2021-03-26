import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import * as shajs from 'sha.js';
import { RouterExtensions } from 'nativescript-angular';

var appSettings = require("application-settings");

appSettings.setString("stringKey", "String value");  // Writing



@Injectable()
export class AuthService {




  constructor(private httpClient: HttpClient,
    private routerExtensions: RouterExtensions) {
  }

  logoutUser() {
    appSettings.remove('token')
  }
  loggedIn() {
    return !!appSettings.getString('token')
  }

  loginUser(user) {
    return this.httpClient.post<any>("/api/users", user);
  }

}


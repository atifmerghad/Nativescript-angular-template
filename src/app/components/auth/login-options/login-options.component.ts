import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { Utils } from "../../../utils/helpers/utils";


@Component({
    selector: "app-login-options",
    templateUrl: "./login-options.component.html",
    styleUrls: ['./login-options.component.scss'],
})
export class LoginOptionsComponent implements OnInit {

    username = "Hello";
    loginForm = {
        username: '',
        password: ''
    }
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private utils: Utils
    ) {
        this.page.actionBarHidden = true;
    }


    ngOnInit(): void {

    }

    loginUser() {
        if (this.loginForm.username == 'Atif')
            this.routerExtensions.navigate(['/otp']);
        else
            this.utils.errorsNotification('login_wrong');
    }



}

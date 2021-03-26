import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";


@Component({
    selector: "app-change-password",
    templateUrl: "./change-password.component.html"
})
export class ChangePasswordComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        //   this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
    }



} 

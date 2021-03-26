import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { overrideLocale } from 'nativescript-localize/localize';
import { getString, setString } from '@nativescript/core/application-settings';
import { RouterExtensions } from "@nativescript/angular";
import { TextField } from "tns-core-modules";


@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        //  this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
    }


}

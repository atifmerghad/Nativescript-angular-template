import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { overrideLocale } from 'nativescript-localize/localize';
import { getString, setString } from '@nativescript/core/application-settings';
import { RouterExtensions } from "@nativescript/angular";


@Component({
    selector: "app-welcome",
    templateUrl: "./welcome.component.html"
})
export class WelcomeComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
        setTimeout(() => {
            this.navigateTo()
        }, 1000)
    }


    navigateTo() {

        this.routerExtensions.navigate(['/home'], {
            clearHistory: true,
            transition: {
                name: 'fade',
                duration: 1000,
                curve: 'linear'
            }
        });
    }


}

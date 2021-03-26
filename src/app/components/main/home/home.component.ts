import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { overrideLocale } from 'nativescript-localize/localize';
import { getString, setString } from '@nativescript/core/application-settings';
import { RouterExtensions } from "@nativescript/angular";
import { TextField } from "tns-core-modules";


@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
    }


    changeLanguage() {
        const deviceLang = getString('__app__language__');
        const lang = (deviceLang == 'ar') ? 'en' : 'ar';
        const localeOverriddenSuccessfully = overrideLocale(lang);
        const forceLeftToRight = 3
        const forceRightToLeft = 4
        UIView.appearance().semanticContentAttribute = (lang == 'ar') ? forceRightToLeft : forceLeftToRight;
        UINavigationBar.appearance().semanticContentAttribute = (lang == 'ar') ? forceRightToLeft : forceLeftToRight;

        // = (lang == 'ar') ? forceRightToLeft : forceLeftToRight;
        this.routerExtensions.navigate(['/welcome'], {
            animated: false,
            transition:
            {
                name: 'flip',
                duration: 1000,
                curve: 'linear'
            }
        })

    }



}

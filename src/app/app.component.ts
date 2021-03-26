import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";
import { Page, EventData } from 'tns-core-modules/ui/page/page';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {

    isRtl: boolean;
    isAndroid = isAndroid;
    count: number = 0;
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {

        //  this.checkConnectivity();

    }

}

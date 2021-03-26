import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { overrideLocale } from 'nativescript-localize/localize';
import { getString, setString } from '@nativescript/core/application-settings';
import { RouterExtensions } from "@nativescript/angular";
import { TextField } from "tns-core-modules";


@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ['./product.component.scss'],

})
export class ProductComponent implements OnInit {

    products = [
        {
            name: "Oil & Oliver",
            subName: "",
            image: "~/assets/images/oil.png",
            backgroundColor: "rgba(248, 164, 76, 0.1)",
            borderColor: "rgba(248, 164, 76, 0.7)",
        },
        {
            name: "Bakery & Snacks",
            subName: "",
            image: "~/assets/images/backery.png",
            backgroundColor: "rgba(211, 176, 224, 0.25)",
            borderColor: "#D3B0E0",
        },
        {
            name: "Fash Fruits",
            subName: "",
            image: "~/assets/images/fruits.png",
            backgroundColor: "rgba(83, 177, 117, 0.1)",
            borderColor: "rgba(83, 177, 117, 0.7)",
        },
        {
            name: "Meat & Fish",
            subName: "",
            image: "~/assets/images/meat.png",
            backgroundColor: "rgba(247, 165, 147, 0.25)",
            borderColor: "#F7A593",
        },
        {
            name: "Meat & Fish",
            subName: "",
            image: "~/assets/images/meat.png",
            backgroundColor: "rgba(247, 165, 147, 0.25)",
            borderColor: "#F7A593",
        },
        {
            name: "Meat & Fish",
            subName: "",
            image: "~/assets/images/meat.png",
            backgroundColor: "rgba(247, 165, 147, 0.25)",
            borderColor: "#F7A593",
        },
        {
            name: "Meat & Fish",
            subName: "",
            image: "~/assets/images/meat.png",
            backgroundColor: "rgba(247, 165, 147, 0.25)",
            borderColor: "#F7A593",
        }

    ]
    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        //  this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
    }


}

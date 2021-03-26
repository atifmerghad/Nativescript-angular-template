import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./components/main/item/items.component";
import { ItemDetailComponent } from "./components/main/item/item-detail.component";
import { HomeComponent } from "./components/main/home/home.component";
import { WelcomeComponent } from "./components/main/welcome/welcome.component";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { AuthGuard } from './utils/helpers/auth.guard';
import { TokenInterceptorService } from './utils/helpers/token-interceptor.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerElement } from "nativescript-angular/element-registry";

import { NativeScriptFormsModule, NativeScriptRouterModule, NativeScriptCommonModule, ModalDialogService, NativeScriptHttpClientModule } from 'nativescript-angular';


import { Gif } from 'nativescript-gif';
registerElement('Gif', () => Gif);

import { AuthModule } from './components/auth/auth.module';
import { DashboardModule } from './components/dashboard/dashboard.module';

import { Utils } from './utils/helpers/utils';
import { DashboardComponent } from "./components/main/dashboard/dashboard.component";
import { ProductComponent } from "./components/main/product/product.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    exports: [
        NativeScriptLocalizeModule
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        AuthModule,
        DashboardModule,
        NativeScriptRouterModule,
        NativeScriptLocalizeModule

    ],
    declarations: [
        AppComponent,
        HomeComponent,
        WelcomeComponent,
        ItemsComponent,
        ItemDetailComponent,
        DashboardComponent,
        ProductComponent
    ],
    providers: [
        AppComponent,
        AuthGuard,
        Utils,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }


import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";

import { CommonModule } from '@angular/common';


import { NativeScriptFormsModule, NativeScriptRouterModule, NativeScriptCommonModule, ModalDialogService, NativeScriptHttpClientModule } from 'nativescript-angular';


@NgModule({
    declarations: [

    ],
    imports: [
        NativeScriptCommonModule,
        CommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DashboardModule { }

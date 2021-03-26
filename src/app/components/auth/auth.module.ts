
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { Utils } from "src/app/utils/helpers/utils";
import { LoginComponent } from './login/login.component';
import { LoginOptionsComponent } from './login-options/login-options.component';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';


import { NativeScriptFormsModule, NativeScriptRouterModule, NativeScriptCommonModule, ModalDialogService, NativeScriptHttpClientModule } from 'nativescript-angular';
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ForgotUsernameComponent } from "./forgot-username/forgot-username.component";

LoginComponent

@NgModule({
    declarations: [
        LoginComponent,
        OtpComponent,
        RegisterComponent,
        ChangePasswordComponent,
        ForgotPasswordComponent,
        ForgotUsernameComponent,
        OtpComponent,
        LoginOptionsComponent
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
export class AuthModule { }

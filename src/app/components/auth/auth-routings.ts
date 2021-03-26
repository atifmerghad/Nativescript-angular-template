import { Routes } from '@angular/router';

import { LoginOptionsComponent } from './login-options/login-options.component';

import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


export const AuthRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login-options',
        component: LoginOptionsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'otp',
        component: OtpComponent
    },
    {
        path: 'forgot-username',
        component: ForgotUsernameComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'change-password',
        component: ChangePasswordComponent
    },
]
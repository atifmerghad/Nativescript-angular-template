import { Component, OnInit, ViewContainerRef, ViewChild, ElementRef } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { TextField } from "tns-core-modules";
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";
import { Utils } from '../../../utils/helpers/utils';


@Component({
    selector: "app-otp",
    templateUrl: "./otp.component.html",
    styleUrls: ['./otp.component.scss'],
    providers: [Utils]

})
export class OtpComponent implements OnInit {

    @ViewChild("myInput", { static: false }) myInput: ElementRef;

    isRtl;
    showSendOtpSender
    constructor(
        private utils: Utils,
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }


    ngOnInit(): void {
        setTimeout(() => this.myInput.nativeElement.focus(), isAndroid ? 0 : 800);
    }


    onLoaded(args) {
        //var field: TextField = <TextField>args.object;
        //field.ios.textContentType = UITextContentTypeOneTimeCode;
        args.object.nativeView.textContentType = UITextContentTypeOneTimeCode;
    }

    onTextChange(args) {
        const label = args.object.page.getViewById(`textField`);
        const numArray = args.object.text.split('');
        for (let i = 0; i < 4; i++) {
            const label = args.object.page.getViewById(`label${i}`);
            label.text = numArray[i] || ' ';
        }
        if (label.text.length == 4) {
            // send otp ()  
            if (label.text == 1111) {
                setTimeout(() => {
                    this.routerExtensions.navigate(['/dashboard'], { clearHistory: true });
                }, 2000)
            }
            else {
                this.utils.errorsNotification('auth.otp_wrong')
            }
        }
    }

    onFocusField(args) {
        args.object.page.getViewById('textField').focus();
    }


    sendOTP() {

    }

    resendOTP() {

    }

    verifyOTP() {

    }


}

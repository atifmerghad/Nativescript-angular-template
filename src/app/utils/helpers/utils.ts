import { Injectable } from "@angular/core";
import { JailbreakDetector } from 'nativescript-jailbreak-detector';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { localize } from "nativescript-localize";
import { exit } from 'nativescript-exit';
import { Feedback } from 'nativescript-feedback';
import { TapticEngine, TapticEngineNotificationType } from "nativescript-taptic-engine";
import { Color } from 'tns-core-modules/ui/page/page';
import * as TNSPhone from 'nativescript-phone';
import { openUrl } from "tns-core-modules/utils/utils";
import { getConnectionType, startMonitoring, stopMonitoring } from "tns-core-modules/connectivity";
import * as connectivityModule from "tns-core-modules/connectivity";
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";


@Injectable()
export class Utils {

    connectionType: string;
    private feedback: Feedback;

    constructor() {
        this.feedback = new Feedback();
    }


    // SECURITY 

    checkJailbeak() {
        const jailDetector = new JailbreakDetector();
        if (jailDetector.isRooted()) {
            dialogs.confirm({
                title: localize('security.title'),
                message: localize('security.message'),
                okButtonText: localize('security.okButtonText'),
            }).then((result) => {
                exit();
            });
        }
    }


    // NOTIFICATIONS 
    errorsNotification(message) {
        this.feedback.show({
            message: localize(message),
            backgroundColor: new Color("#E02020"),
            //  titleFont: "Raleway"
        });
    }

    tapticEngineFunction() {
        let tapticEngine = new TapticEngine();
        tapticEngine.notification({
            type: TapticEngineNotificationType.ERROR
        });
    }


    // CONTACT

    callNumber(phoneNumber) {
        TNSPhone.requestCallPermission('You should accept the permission to be able to make a direct phone call.')
            .then(() => TNSPhone.dial(phoneNumber, true))
            .catch(() => console.log('refused'));
    }

    openEmail(email) {
        openUrl("mailto:" + email);
    }

    openUrl(url) {
        openUrl(url);
    }



    // CHECK INTERNT 
    checkConnectivity() {
        let type = getConnectionType();

        switch (type) {
            case connectivityModule.connectionType.none:
                this.connectionType = "None";
                break;
            case connectivityModule.connectionType.wifi:
                this.connectionType = "Wi-Fi";
                break;
            case connectivityModule.connectionType.mobile:
                this.connectionType = "Mobile";
                break;
            case connectivityModule.connectionType.bluetooth:
                this.connectionType = "Bluetooth";
                break;
            default:
                break;
        }
    }

    connectivityMonitoring() {
        startMonitoring((type) => {
            switch (type) {
                case connectivityModule.connectionType.none:
                    this.connectionType = "None";
                    // console.log("Connection type changed to none.");
                    break;
                case connectivityModule.connectionType.wifi:
                    this.connectionType = "Wi-Fi";
                    // console.log("Connection type changed to WiFi.");
                    break;
                case connectivityModule.connectionType.mobile:
                    this.connectionType = "Mobile";
                    // console.log("Connection type changed to mobile.");
                    break;
                case connectivityModule.connectionType.bluetooth:
                    this.connectionType = "Bluetooth";
                    // console.log("Connection type changed to Bluetooth.");
                    break;
                default:
                    break;
            }
        });
    }

    defaultLanguage() {
        if (isIOS)
            return device.language.split('-')[0]
        else
            return java.util.Locale.getDefault().getLanguage();
    }


    // UPDATE

    checkAppUpdate() {

    }




}
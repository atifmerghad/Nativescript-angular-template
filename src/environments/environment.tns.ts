import { environment as devEnvironment } from './environment.dev';
import { environment as prodEnvironment } from './environment.prod';
import { environment as uatEnvironment } from './environment.uat';

declare var process: any;

export const environment = (() => {
    let envVars;

    if (
        typeof process !== 'undefined' && process &&
        Object.prototype.hasOwnProperty.call(process, 'env') && process.env &&
        Object.prototype.hasOwnProperty.call(process.env, 'environment') && process.env.environment
    ) {
        switch (process.env.environment) {
            case 'prod':
                envVars = prodEnvironment;
                break;
            case 'uat':
                envVars = uatEnvironment;
                break;
            case 'dev':
                envVars = devEnvironment;
                break;
            default:
                envVars = uatEnvironment;
        }
    } else {
        envVars = uatEnvironment;
    }

    return envVars;
})();
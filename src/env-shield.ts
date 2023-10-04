import {VALIDATION_ERRORS} from "./errors";
import {EnvShieldObject} from "./types";


export class EnvShield<T extends EnvShieldObject> {
    private readonly envVariables: Record<keyof T, any>;

    constructor(env: any, envShieldObject: T) {
        this.envVariables = {} as Record<keyof T, any>;

        for (const envVarName in envShieldObject) {
            const validator = envShieldObject[env]
            const varValue = env[envVarName]
            if (!varValue) {
                throw new Error(VALIDATION_ERRORS.MISSING_VARIABLE(envVarName))
            }

            this.envVariables[envVarName] = validator(varValue)
        }
    }

    getVar<K extends keyof T>(varName: K) {
        return this.envVariables[varName] as ReturnType<T[K]>
    }

}





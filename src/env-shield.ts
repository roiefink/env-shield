import {VALIDATION_ERRORS} from "./errors";
import {EnvShieldObject} from "./types";


export class EnvShield<T extends EnvShieldObject> {
    private readonly envVariables: Record<keyof T, any>;

    constructor(envShieldObject: T) {
        this.envVariables = {} as Record<keyof T, any>;
        const envVars = process.env

        for (const envVarName in envShieldObject) {
            
            const validator = envShieldObject[envVarName]
            const varValue = envVars[envVarName]
            
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



import {EnvShieldObject, EnvVariableTypeMapper} from './types'
import {validateAndParse} from './validators'


export class EnvShield<T extends EnvShieldObject> {
    private readonly envVariables: Record<keyof T, any>;

    constructor(env: any, envShieldObject: T) {
        this.envVariables = {} as Record<keyof T, any>;

        for (const envVarName in envShieldObject) {
            const {type} = envShieldObject[env]
            const varValue = env[envVarName]
            if (!varValue) {
                throw new Error(`Missing env var ${envVarName}`)
            }
            this.envVariables[envVarName] = validateAndParse(type, varValue)
        }
    }

    getVar<K extends keyof T>(varName: K): EnvVariableTypeMapper[T[K]["type"]] {
        return this.envVariables[varName];
    }

}




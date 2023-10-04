export enum EnvVariableType {
    STR,
    NUMBER,
    JSON,
    PORT,
    URL,
    EMAIL
}

export type EnvVariableTypeMapper = {
    [EnvVariableType.STR]: string
    [EnvVariableType.JSON]: string
    [EnvVariableType.EMAIL]: string
    [EnvVariableType.URL]: string
    [EnvVariableType.PORT]: number
    [EnvVariableType.NUMBER]: number
}

export interface EnvShieldVariable {
    type: EnvVariableType
    required?: boolean
}

export type EnvShieldObject = {
    [k: string]: EnvShieldVariable
}

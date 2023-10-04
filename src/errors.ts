export const VALIDATION_ERRORS = {
    INVALID_URL: (url: string) => {
        return `${url} is not a valid url`
    },
    INVALID_PORT: (port: string) => {
        return `${port} is not a valid port`
    },
    INVALID_EMAIL: (email: string) => {
        return `${email} is not a valid url`
    },
    INVALID_JSON: (json: string) => {
        return `${json} is not a valid JSON`
    },
    INVALID_NUMBER: (number: string) => {
        return `${number} is not a valid number`
    },
    MISSING_VARIABLE: (varName: string) => {
        return `${varName} is missing`
    }
}

import {EnvVariableType} from './types'

export const isValidUrl = (url: string) => {
    try {
        new URL(url);
        return url;
    } catch (error) {
        throw new Error(`${url} is Invalid url`);
    }
}


function isValidPort(port: string) {
    const portNumber = parseInt(port, 10);
    if (!isNaN(portNumber) && portNumber >= 1 && portNumber <= 65535) {
        return portNumber
    }

    throw new Error(`${port} is Invalid port`);

}

function isValidJSON(jsonString: string) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        throw new Error(`${jsonString} is Invalid json`);
    }
}


function isValidEmail(email: string) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
        throw new Error(`${email} is Invalid email`);
    }
    return email
}

function isValidStringNumber(stringNumber: string) {
    const number = parseFloat(stringNumber);
    if (!isNaN(number)) {
        return number;
    } else {
        throw new Error(`${stringNumber} is Invalid number`);
    }
}

function isValidString(str: string) {
    return str
}


const validatorMapper = {
    [EnvVariableType.JSON]: isValidJSON,
    [EnvVariableType.NUMBER]: isValidStringNumber,
    [EnvVariableType.STR]: isValidString,
    [EnvVariableType.PORT]: isValidPort,
    [EnvVariableType.URL]: isValidUrl,
    [EnvVariableType.EMAIL]: isValidEmail
}


export const validateAndParse = (type: EnvVariableType, value: string) => {
    return validatorMapper[type](value)
}




import {VALIDATION_ERRORS} from './errors'

export const isUrl = (url: string) => {
    try {
        new URL(url);
        return url;
    } catch (error) {
        throw new Error(VALIDATION_ERRORS.INVALID_URL(url));
    }
}


export const isPort = (port: string) => {
    const portNumber = parseInt(port, 10);
    if (!isNaN(portNumber) && portNumber >= 1 && portNumber <= 65535) {
        return portNumber
    }

    throw new Error(VALIDATION_ERRORS.INVALID_PORT(port));

}

export const isJSON = (jsonString: string) => {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        throw new Error(VALIDATION_ERRORS.INVALID_JSON(jsonString));
    }
}


export const isEmail = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
        throw new Error(VALIDATION_ERRORS.INVALID_EMAIL(email));
    }
    return email
}

export const isNumber = (stringNumber: string) => {
    const number = parseFloat(stringNumber);
    if (!isNaN(number)) {
        return number;
    } else {
        throw new Error(VALIDATION_ERRORS.INVALID_NUMBER(stringNumber));
    }
}

export const isString = (str: string) => {
    return str
}





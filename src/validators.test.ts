import {
  isUrl,
  isDatabaseUrl,
  isPort,
  isJSON,
  isEmail,
  isNumber,
  isString
} from './validators';
import { VALIDATION_ERRORS } from './errors';

describe('isUrl validator', () => {
  it('should return the URL if valid', () => {
    expect(isUrl('https://example.com')).toBe('https://example.com');
  });

  it('should throw an error if the URL is invalid', () => {
    expect(() => isUrl('invalid-url')).toThrowError(
      VALIDATION_ERRORS.INVALID_URL('invalid-url')
    );
  });
});

describe('isDatabaseUrl validator', () => {
  it('should return the URL if valid', () => {
    expect(isDatabaseUrl('postgres://user:pass@localhost:5432/db')).toBe(
      'postgres://user:pass@localhost:5432/db'
    );
  });

  it('should throw an error if the URL is invalid', () => {
    expect(() => isDatabaseUrl('invalid-url')).toThrowError(
      VALIDATION_ERRORS.INVALID_CONNECTION_STRING('invalid-url')
    );
  });
});

describe('isPort validator', () => {
  it('should return the port number if valid', () => {
    expect(isPort('8080')).toBe(8080);
  });

  it('should throw an error if the port is invalid', () => {
    expect(() => isPort('invalid-port')).toThrowError(
      VALIDATION_ERRORS.INVALID_PORT('invalid-port')
    );
  });
});

describe('isJSON validator', () => {
  it('should return the parsed JSON if valid', () => {
    expect(isJSON('{"key": "value"}')).toEqual({ key: 'value' });
  });

  it('should throw an error if the JSON is invalid', () => {
    expect(() => isJSON('invalid-json')).toThrowError(
      VALIDATION_ERRORS.INVALID_JSON('invalid-json')
    );
  });
});

describe('isEmail validator', () => {
  it('should return the email if valid', () => {
    expect(isEmail('test@example.com')).toBe('test@example.com');
  });

  it('should throw an error if the email is invalid', () => {
    expect(() => isEmail('invalid-email')).toThrowError(
      VALIDATION_ERRORS.INVALID_EMAIL('invalid-email')
    );
  });
});

describe('isNumber validator', () => {
  it('should return the parsed number if valid', () => {
    expect(isNumber('42')).toBe(42);
  });

  it('should throw an error if the number is invalid', () => {
    expect(() => isNumber('invalid-number')).toThrowError(
      VALIDATION_ERRORS.INVALID_NUMBER('invalid-number')
    );
  });
});

describe('isString validator', () => {
  it('should return the input string', () => {
    expect(isString('Hello, World!')).toBe('Hello, World!');
  });
});

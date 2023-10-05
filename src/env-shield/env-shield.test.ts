import { EnvShield } from './env-shield';
import {
  isUrl,
  isEmail,
  isString,
  isNumber,
  VALIDATION_ERRORS
} from '../validators';

describe('EnvShield', () => {
  // Mock process.env variables for testing.
  const originalEnv = process.env;
  beforeAll(() => {
    process.env = {
      URL_VARIABLE: 'http://example.com',
      EMAIL_VARIABLE: 'user@example.com',
      NUMBER_VARIABLE: '42'
    };
  });
  afterAll(() => {
    process.env = originalEnv;
  });

  it('should create an instance of EnvShield with a valid schema', () => {
    const validationSchema = {
      URL_VARIABLE: isUrl,
      EMAIL_VARIABLE: isEmail,
      NUMBER_VARIABLE: isNumber
    };

    expect(() => new EnvShield(validationSchema)).not.toThrow();
  });

  it('should throw an error for missing required variable', () => {
    process.env.MISSING_VARIABLE = ''; // Simulate a missing required variable
    const validationSchema = {
      MISSING_VARIABLE: isString // This variable is missing
    };

    expect(() => new EnvShield(validationSchema)).toThrowError(
      VALIDATION_ERRORS.MISSING_VARIABLE('MISSING_VARIABLE')
    );
  });

  it('should retrieve a specific environment variable', () => {
    const validationSchema = {
      URL_VARIABLE: isUrl,
      EMAIL_VARIABLE: isEmail
    };

    const envShield = new EnvShield(validationSchema);
    const url = envShield.getVar('URL_VARIABLE');
    const email = envShield.getVar('EMAIL_VARIABLE');
    expect(url).toBe('http://example.com');
    expect(email).toBe('user@example.com');
  });

  it('should retrieve all environment variables', () => {
    const validationSchema = {
      URL_VARIABLE: isUrl,
      EMAIL_VARIABLE: isEmail,
      NUMBER_VARIABLE: isNumber
    };

    const envShield = new EnvShield(validationSchema);
    const vars = envShield.getVars();
    expect(vars.URL_VARIABLE).toBe('http://example.com');
    expect(vars.EMAIL_VARIABLE).toBe('user@example.com');
    expect(vars.NUMBER_VARIABLE).toBe(42);
  });
});

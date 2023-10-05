import { VALIDATION_ERRORS } from '../validators';
import { EnvShieldObject } from './env-shield.types';

export class EnvShield<T extends EnvShieldObject> {
  private readonly envVariables: Record<keyof T, any>;

  /**
   * Creates a new instance of the `EnvShield` class with the provided validation schema.
   *
   * @param envShieldObject - An object representing the validation schema for environment variables.
   * It should have variable names as keys and validation functions as values.
   * @throws Error if any required environment variables are missing or fail validation.
   */
  constructor(envShieldObject: T) {
    this.envVariables = {} as Record<keyof T, any>;
    const envVars = process.env;

    for (const envVarName in envShieldObject) {
      const validator = envShieldObject[envVarName];
      const varValue = envVars[envVarName];

      if (!varValue) {
        throw new Error(VALIDATION_ERRORS.MISSING_VARIABLE(envVarName));
      }

      this.envVariables[envVarName] = validator(varValue);
    }
  }

  /**
   * Get the value of a specific environment variable.
   *
   * @typeparam K - The key (variable name) from the validation schema.
   * @param varName - The name of the environment variable to retrieve.
   * @returns The validated value of the specified environment variable.
   */
  getVar<K extends keyof T>(varName: K): ReturnType<T[K]> {
    return this.envVariables[varName];
  }

  /**
   * Get all validated environment variables as an object.
   *
   * @returns An object where keys are variable names and values are the validated values
   * of the corresponding environment variables.
   */
  getVars(): { [K in keyof T]: ReturnType<T[K]> } {
    return this.envVariables;
  }
}

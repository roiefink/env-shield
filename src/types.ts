type EnvShieldValidator = (value: string) => any;

export type EnvShieldObject = Record<string, EnvShieldValidator>;

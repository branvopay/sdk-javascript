import { ConfigurationInterface } from './interfaces/configuration';
import { Environment } from './enum/environment';

export type ConfigurationProps = {
  token: string;
  env: Environment;
};

export class Configuration implements ConfigurationInterface {
  private _token: string;
  private _env: Environment;

  public constructor({ token, env }: ConfigurationProps) {
    this._token = token;
    this._env = env;
  }

  public getToken(): string {
    return this._token;
  }

  public isProduction(): boolean {
    return this._env === Environment.PRODUCTION;
  }

  public isSandbox(): boolean {
    return this._env === Environment.SANDBOX;
  }
}

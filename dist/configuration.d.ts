import { ConfigurationInterface } from './interfaces/configuration';
import { Environment } from './enum/environment';
export declare type ConfigurationProps = {
    token: string;
    env: Environment;
};
export declare class Configuration implements ConfigurationInterface {
    private _token;
    private _env;
    constructor({ token, env }: ConfigurationProps);
    getToken(): string;
    isProduction(): boolean;
    isSandbox(): boolean;
}

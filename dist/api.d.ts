import { AxiosInstance } from 'axios';
import { ConfigurationInterface } from './interfaces/configuration';
export declare abstract class Api {
    private readonly PRODUCTION_URL;
    private readonly SANDBOX_URL;
    protected client: AxiosInstance;
    constructor(path: string, version: string, configuration: ConfigurationInterface);
}

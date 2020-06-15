import { AxiosInstance } from "axios";
import { Configuration } from "./interfaces/configuration";
export declare abstract class Api {
    private readonly PRODUCTION_URL;
    private readonly SANDBOX_URL;
    protected client: AxiosInstance;
    Api(path: string, version: string, configuration: Configuration): void;
}

import { Api } from './api';
import { BoletoInterface } from './interfaces/boleto';
import { ResponseInterface } from './interfaces/response';
import { EmissionResponse } from './interfaces/emission-response';
import { ConfigurationInterface } from './interfaces/configuration';
import { Emission } from './interfaces';
export declare class Boleto extends Api implements BoletoInterface {
    constructor(configuration: ConfigurationInterface);
    emission(payload: Emission): Promise<ResponseInterface<EmissionResponse>>;
    cancel(code: string): Promise<ResponseInterface<EmissionResponse>>;
    consult(code: string): Promise<ResponseInterface<EmissionResponse>>;
}

import { Api } from './api';
import { BoletoInterface } from './interfaces/boleto';
import { ResponseInterface } from './interfaces/response';
import { EmissionResponse } from './interfaces/emission-response';
import { ConfigurationInterface } from './interfaces/configuration';
export declare class Boleto extends Api implements BoletoInterface<EmissionResponse> {
    constructor(configuration: ConfigurationInterface);
    emission(payload: EmissionResponse): Promise<ResponseInterface<EmissionResponse>>;
    cancel(code: string): Promise<ResponseInterface<EmissionResponse>>;
    consult(code: string): Promise<ResponseInterface<EmissionResponse>>;
}

import { Api } from './api';
import { BoletoInterface } from './interfaces/boleto';
import { ResponseInterface } from './interfaces/response';
import { EmissionResponse } from './interfaces/emission-response';
export declare class Boleto extends Api implements BoletoInterface<EmissionResponse> {
    emission(payload: EmissionResponse): Promise<ResponseInterface<EmissionResponse>>;
    cancel(code: string): Promise<ResponseInterface<EmissionResponse>>;
    consult(code: string): Promise<ResponseInterface<EmissionResponse>>;
}

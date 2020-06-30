import { Emission } from './emission';
import { ResponseInterface } from './response';
import { EmissionResponse } from './emission-response';
export interface BoletoInterface {
    /**
     * Emite um boleto bancário
     */
    emission: (model: Emission) => Promise<ResponseInterface<EmissionResponse>>;
    /**
     * Realiza a solicitação de cancelamento do boleto
     */
    cancel: (code: string) => Promise<ResponseInterface<EmissionResponse>>;
    /**
     * Realiza a consulta do status do boleto
     */
    consult: (code: string) => Promise<ResponseInterface<EmissionResponse>>;
}

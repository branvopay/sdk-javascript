import { ResponseInterface } from './response';
export interface BoletoInterface<T> {
    /**
     * Emite um boleto bancário
     */
    emission: (model: T) => Promise<ResponseInterface<T>>;
    /**
     * Realiza a solicitação de cancelamento do boleto
     */
    cancel: (code: string) => Promise<ResponseInterface<T>>;
    /**
     * Realiza a consulta do status do boleto
     */
    consult: (code: string) => Promise<ResponseInterface<T>>;
}

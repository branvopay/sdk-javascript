import { Api } from './api';
import { ResponseInterface } from './interfaces/response';
import { ConfigurationInterface } from './interfaces/configuration';
import { BinResponse } from './interfaces/bin-response';
import { ConsultaInterface } from './interfaces/consulta';
import { ConsultaCartao, ConsultaCartaoResponse } from './interfaces';
export declare class Consulta extends Api implements ConsultaInterface {
    constructor(configuration: ConfigurationInterface);
    bin(bin: string): Promise<ResponseInterface<BinResponse>>;
    cartao(payload: ConsultaCartao): Promise<ResponseInterface<ConsultaCartaoResponse>>;
}

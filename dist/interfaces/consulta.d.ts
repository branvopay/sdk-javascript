import { ResponseInterface } from './response';
import { BinResponse } from './bin-response';
import { ConsultaCartao } from './consulta-cartao';
import { ConsultaCartaoResponse } from './consulta-cartao-response';
export interface ConsultaInterface {
    /**
     * Consulta os dados do cartão de crédito através do bin (6 primeiros dígitos)
     */
    bin: (bin: string) => Promise<ResponseInterface<BinResponse>>;
    /**
     * Consulta a validade do cartão
     */
    cartao: (payload: ConsultaCartao) => Promise<ResponseInterface<ConsultaCartaoResponse>>;
}

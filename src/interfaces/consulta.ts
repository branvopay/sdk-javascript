import { ResponseInterface } from './response';
import { BinResponse } from './bin-response';

export interface ConsultaInterface {
  /**
   * Consulta os dados do cartão de crédito através do bin (6 primeiros dígitos)
   */
  bin: (bin: string) => Promise<ResponseInterface<BinResponse>>;
}

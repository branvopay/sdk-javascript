import { Api } from './api';
import { ResponseInterface } from './interfaces/response';
import { Response } from './response';
import { ConfigurationInterface } from './interfaces/configuration';
import { BinResponse } from './interfaces/bin-response';
import { ConsultaInterface } from './interfaces/consulta';
import { ConsultaCartao, ConsultaCartaoResponse } from './interfaces';

export class Consulta extends Api implements ConsultaInterface {
  public constructor(configuration: ConfigurationInterface) {
    super('consulta', 'v2', configuration);
  }

  public async bin(bin: string): Promise<ResponseInterface<BinResponse>> {
    try {
      const response = await this.client.get(`bin?bin=${bin}`);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }

  public async cartao(payload: ConsultaCartao): Promise<ResponseInterface<ConsultaCartaoResponse>> {
    try {
      const response = await this.client.post('cartao', payload);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }
}

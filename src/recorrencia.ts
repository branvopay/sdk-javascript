import { Api } from './api';
import { ResponseInterface } from './interfaces/response';
import { Response } from './response';
import { ConfigurationInterface } from './interfaces/configuration';

import { RecorrenciaModel } from './interfaces/recorrencia-model';
import { RecorrenciaResponse } from './interfaces/recorrencia-response';
import { RecorrenciaInterface } from './interfaces/recorrencia';

export class Recorrencia extends Api implements RecorrenciaInterface {
  public constructor(configuration: ConfigurationInterface) {
    super('cartao', 'v2', configuration);
  }

  public async save(payload: RecorrenciaModel, code?: number): Promise<ResponseInterface<RecorrenciaResponse>> {
    try {
      const response = await this.client.post(code ? `recurrent/${code}` : 'recurrent', payload);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }

  public async get(code: number): Promise<ResponseInterface<RecorrenciaResponse>> {
    try {
      const response = await this.client.post(`recurrent/${code}`);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }
}

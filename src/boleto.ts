import { Api } from './api';
import { Response } from './response';
import { BoletoInterface } from './interfaces/boleto';
import { ResponseInterface } from './interfaces/response';
import { EmissionResponse } from './interfaces/emission-response';
import { ConfigurationInterface } from './interfaces/configuration';

export class Boleto extends Api implements BoletoInterface<EmissionResponse> {
  public constructor(configuration: ConfigurationInterface) {
    super('boleto', 'v2', configuration);
  }

  public async emission(payload: EmissionResponse): Promise<ResponseInterface<EmissionResponse>> {
    try {
      const response = await this.client.post<ResponseInterface<EmissionResponse>>('emission', payload);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }

  public async cancel(code: string): Promise<ResponseInterface<EmissionResponse>> {
    try {
      const response = await this.client.put(`cancel/${code}`);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }

  public async consult(code: string): Promise<ResponseInterface<EmissionResponse>> {
    try {
      const response = await this.client.get(`consult/${code}`);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }
}

import { ResponseInterface } from './response';
import { RecorrenciaModel } from './recorrencia-model';
import { RecorrenciaResponse } from './recorrencia-response';

export interface RecorrenciaInterface {
  /**
   * Cria/Atualiza uma nova recorrência
   */
  save: (model: RecorrenciaModel, code?: string) => Promise<ResponseInterface<RecorrenciaResponse>>;

  /**
   * Consulta uma recorrência
   */
  get: (code: string) => Promise<ResponseInterface<RecorrenciaResponse>>;
}

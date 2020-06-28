import { ResponseInterface } from './response';
import { RecorrenciaModel } from './recorrencia-model';
import { RecorrenciaResponse } from './recorrencia-response';
import { RecorrenciaUpdateModel } from './recorrencia-update-model';

export interface RecorrenciaInterface {
  /**
   * Cria/Atualiza uma nova recorrência
   */
  save: (
    model: RecorrenciaModel | RecorrenciaUpdateModel,
    code?: number,
  ) => Promise<ResponseInterface<RecorrenciaResponse>>;

  /**
   * Consulta uma recorrência
   */
  get: (code: number) => Promise<ResponseInterface<RecorrenciaResponse>>;
}

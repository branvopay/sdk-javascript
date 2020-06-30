import { Api } from './api';
import { ResponseInterface } from './interfaces/response';
import { ConfigurationInterface } from './interfaces/configuration';
import { RecorrenciaModel } from './interfaces/recorrencia-model';
import { RecorrenciaResponse } from './interfaces/recorrencia-response';
import { RecorrenciaInterface } from './interfaces/recorrencia';
export declare class Recorrencia extends Api implements RecorrenciaInterface {
    constructor(configuration: ConfigurationInterface);
    save(payload: RecorrenciaModel, code?: number): Promise<ResponseInterface<RecorrenciaResponse>>;
    get(code: number): Promise<ResponseInterface<RecorrenciaResponse>>;
}

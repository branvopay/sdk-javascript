import { Api } from './api';
import { CartaoInterface } from './interfaces/cartao';
import { ResponseInterface } from './interfaces/response';
import { Transaction } from './interfaces/transaction';
import { Split } from './interfaces/split';
import { TransactionResponse } from './interfaces/transaction-response';
import { SplitResponse } from './interfaces/split-response';
import { GetResponse } from './interfaces/get-response';
import { CaptureResponse } from './interfaces/capture-response';
import { CancelResponse } from './interfaces/cancel-response';
export declare class Cartao extends Api implements CartaoInterface {
    transaction(params: Transaction): Promise<ResponseInterface<TransactionResponse>>;
    split(params: Split): Promise<ResponseInterface<SplitResponse>>;
    get(orderNumber: string): Promise<ResponseInterface<GetResponse>>;
    cancel(orderNumber: string): Promise<ResponseInterface<CancelResponse[]>>;
    capture(orderNumber: string): Promise<ResponseInterface<CaptureResponse>>;
}

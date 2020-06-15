import { ResponseInterface } from './response';
import { Transaction } from './transaction';
import { Split } from './split';
import { TransactionResponse } from './transaction-response';
import { SplitResponse } from './split-response';
import { GetResponse } from './get-response';
import { CancelResponse } from './cancel-response';
import { CaptureResponse } from './capture-response';
export interface CartaoInterface {
    /**
     * Cria uma nova transação de crédito/débito
     */
    transaction: (model: Transaction) => Promise<ResponseInterface<TransactionResponse>>;
    /**
     * Cria um novo split de pagamentos
     */
    split: (model: Split) => Promise<ResponseInterface<SplitResponse>>;
    /**
     * Realiza a consulta da transação
     */
    get: (orderNumber: string) => Promise<ResponseInterface<GetResponse>>;
    /**
     * Realiza o cancelamento e estorno da transação
     */
    cancel: (orderNumber: string) => Promise<ResponseInterface<CancelResponse[]>>;
    /**
     * Realiza a captura da transação
     */
    capture: (orderNumber: string) => Promise<ResponseInterface<CaptureResponse>>;
}

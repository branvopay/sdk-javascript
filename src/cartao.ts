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
import { Response } from './response';

export class Cartao extends Api implements CartaoInterface {
  public async transaction(params: Transaction): Promise<ResponseInterface<TransactionResponse>> {
    try {
      const response = await this.client.get('new', { params });
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }

  public async split(params: Split): Promise<ResponseInterface<SplitResponse>> {
    try {
      const response = await this.client.get('split', { params });
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }

  public async get(orderNumber: string): Promise<ResponseInterface<GetResponse>> {
    try {
      const response = await this.client.get(`get/${orderNumber}`);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }

  public async cancel(orderNumber: string): Promise<ResponseInterface<CancelResponse[]>> {
    try {
      const response = await this.client.get(`cancel/${orderNumber}`);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }

  public async capture(orderNumber: string): Promise<ResponseInterface<CaptureResponse>> {
    try {
      const response = await this.client.get(`capture/${orderNumber}`);
      return new Response(response);
    } catch (error) {
      return new Response(error.response);
    }
  }
}

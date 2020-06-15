import { Error } from './interfaces/error';
import { ResponseInterface } from './interfaces/response';
import { AxiosResponse } from 'axios';

export class Response<T> implements ResponseInterface<T> {
  public success: boolean;
  public data: T;
  public error: Error;

  public constructor(response: AxiosResponse) {
    this.success = response.data.success;

    if (this.success) {
      this.data = response.data;
    } else {
      this.error = { code: response.data.errorCode, message: response.data.errorMessage };
    }
  }
}

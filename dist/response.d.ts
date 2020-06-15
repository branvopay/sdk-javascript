import { Error } from './interfaces/error';
import { ResponseInterface } from './interfaces/response';
import { AxiosResponse } from 'axios';
export declare class Response<T> implements ResponseInterface<T> {
    success: boolean;
    data: T;
    error: Error;
    constructor(response: AxiosResponse);
}

import { Error } from './error';
export interface ResponseInterface<T> {
    success: boolean;
    data: T;
    error: Error;
}

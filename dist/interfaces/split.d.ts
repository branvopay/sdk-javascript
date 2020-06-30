import { Transaction } from './transaction';
export interface Split extends Transaction {
    taxRule?: string;
    splitType: string;
    splitAmount: number[];
    splitToken: string[];
}

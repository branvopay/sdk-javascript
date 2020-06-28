import { Transaction } from './transaction';
import { Frequence } from '../enum';

export interface RecorrenciaModel extends Transaction {
  frequence: Frequence;
  dayNumber: number;
  startDate: string;
  finalDate: string;
}

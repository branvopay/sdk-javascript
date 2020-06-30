import { Frequence } from '../enum';
export interface RecorrenciaUpdateModel {
    frequence?: Frequence;
    amount?: number;
    dayNumber?: number;
    finalDate?: string;
    active?: boolean;
}

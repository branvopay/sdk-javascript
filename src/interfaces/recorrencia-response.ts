export interface RecorrenciaResponse {
  recurrence: {
    active: boolean;
    amount: number;
    name: string;
    cardDate: string;
    cardNumber: string;
    code: number;
    createdAt: string;
    lastCharge: string;
    nextCharge: string;
    finalDate: string;
    frequence: string;
  };
}

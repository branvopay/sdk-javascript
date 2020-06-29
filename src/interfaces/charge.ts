export interface Charge {
  code: string;
  reference: string;
  amount: number;
  dueDate: string;
  link: string;
  installmentLink: string;
  cancel: boolean;
  status: string;
  recurrence: {
    code: number;
    frequence: string;
    dayNumber: string;
    lastCharge: string;
    nextCharge: string;
  };
}

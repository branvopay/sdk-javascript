export interface CancelResponse {
    code: number;
    orderNumber: string;
    status: number;
    amount: number;
    totalVoided: number;
    dateCancel: string;
    message: string;
}

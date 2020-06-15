export interface CancelResponse {
    code: number;
    orderNumber: string;
    status: number;
    amount: number;
    dateCancel: string;
    message: string;
}

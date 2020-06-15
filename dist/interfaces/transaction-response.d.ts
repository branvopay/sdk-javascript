export interface TransactionResponse {
    code: number;
    authUrl: string;
    accountName: string;
    payerName: string;
    orderNumber: string;
    status: number;
    amount: number;
    fraudPoints: number;
    dateAnalysis: string;
    message: string;
}

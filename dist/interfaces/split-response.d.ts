export interface SplitItem {
    name: string;
    amount: string;
}
export interface SplitResponse {
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
    split: SplitItem[];
}

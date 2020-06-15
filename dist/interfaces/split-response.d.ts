export interface SplitItem {
    name: string;
    amount: string;
}
export interface SplitResponse {
    code: number;
    orderNumber: string;
    status: number;
    amount: number;
    fraudPoints: number;
    dateAnalysis: string;
    queueOrder: number;
    retry: boolean;
    message: string;
    split: SplitItem[];
}

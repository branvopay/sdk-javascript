import { StatusTransaction } from './status-transaction';
export interface CreditCard {
    number: string;
    holder: string;
    date: string;
}
export interface Address {
    postcode: string;
    street: string;
    number: string;
    complement: string;
    neighbourhood: string;
    city: string;
    state: string;
}
export interface GetResponse {
    code: number;
    ordernumber: string;
    status: StatusTransaction;
    statusdescription: string;
    clientname: string;
    clientdocument: string;
    reference: string;
    responsible: string;
    fraudpoints: string;
    parcelnumber: number;
    value: number;
    ipaddress: string;
    os: string;
    browser: string;
    dateanalysis: string;
    notificationurl: string;
    creditCard: CreditCard;
    address: Address;
    billingAddress: Address;
    accountName: string;
    totalVoided: number;
}

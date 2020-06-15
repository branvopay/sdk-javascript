export interface CreditCard {
  number: string;
  holder: string;
  date: string;
}

export interface Address {
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
  status: number;
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
  datecreate: string;
  creditcard: CreditCard;
  address: Address;
  billingaddress: Address;
  accountname: string;
}

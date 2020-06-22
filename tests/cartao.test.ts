import moment from 'moment';

import { Cartao, Configuration } from '../src';
import {
  Transaction,
  ConfigurationInterface,
  CartaoInterface,
  ResponseInterface,
  TransactionResponse,
} from '../src/interfaces';
import { PersonType, State, Environment, TaxRule, SplitType } from '../src/enum';

const payload: () => Transaction = () => ({
  clientName: 'Nome Completo',
  clientDocument: '437.283.950-21',
  clientType: PersonType.PESSOA_FISICA,
  clientMail: 'user@example.com',
  clientPhone: '(11) 9 9999-9999',
  clientSecondaryMail: 'user@example.com',
  clientBirthDate: '2020-06-10',
  billingStreet: 'string',
  billingNumber: 'string',
  billingNeighbourhood: 'string',
  billingCity: 'string',
  billingState: State.SAO_PAULO,
  billingPostcode: '00000000',
  billingComplement: 'string',
  billingResponsible: 'Nome Completo',
  deliveryStreet: 'string',
  deliveryNumber: 'string',
  deliveryNeighbourhood: 'string',
  deliveryCity: 'string',
  deliveryState: State.SAO_PAULO,
  deliveryPostcode: '00000000',
  deliveryComplement: 'string',
  deliveryResponsible: 'Nome Completo',
  cardOwnerName: 'Nome Completo',
  cardOwnerType: PersonType.PESSOA_FISICA,
  cardOwnerDocument: '437.283.950-21',
  cardOwnerPhone: '(11) 9 9999-9999',
  cardFlag: 'mastercard',
  cardNumber: '5431 0906 3635 6361',
  cardMonth: '12',
  cardYear: moment().format('yyyy-MM-dd'),
  cardCode: '123',
  antiFraud: true,
  orderNumber: new Date().getTime().toString(),
  value: 100.0,
  parcelNumber: 1,
  capture: true,
  abbreviate: true,
  ipAddress: '192.168.0.1',
  os: 'string',
  notificationUrl: 'string',
  browser: 'string',
});

test('should make new transaction', async () => {
  const config: ConfigurationInterface = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const cartao: CartaoInterface = new Cartao(config);

  const response: ResponseInterface<TransactionResponse> = await cartao.transaction(payload());

  expect(response.success).toBe(true);
});

test('should make payment split', async () => {
  const config = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const cartao = new Cartao(config);

  const response = await cartao.split({
    ...payload(),
    taxRule: TaxRule.DIVIDED,
    splitType: SplitType.PERCENTAGE,
    splitAmount: [50, 50],
    splitToken: ['23B5E1AE45EE03313AD3C3EC0B083707', '0B34974F15D91716E9277F985FC98AC0'],
  });

  expect(response.success).toBe(true);
});

test('should make cancel', async () => {
  const config = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const cartao = new Cartao(config);

  const orderNumber = (await cartao.transaction(payload())).data.orderNumber;

  const response = await cartao.cancel(orderNumber);

  expect(response.success).toBe(true);
});

test('should make partial cancel', async () => {
  const config = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const cartao = new Cartao(config);

  const orderNumber = (await cartao.transaction(payload())).data.orderNumber;

  const amount = 50;

  const response = await cartao.cancel(orderNumber, amount);

  expect(response.success).toBe(true);
});

test('should consult transaction', async () => {
  const config = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const cartao = new Cartao(config);

  const orderNumber = (await cartao.transaction(payload())).data.orderNumber;

  const response = await cartao.get(orderNumber);

  expect(response.success).toBe(true);
});

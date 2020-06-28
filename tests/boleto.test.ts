import moment from 'moment';

import { Boleto, Configuration } from '../src';
import {
  ConfigurationInterface,
  BoletoInterface,
  ResponseInterface,
  Emission,
  EmissionResponse,
} from '../src/interfaces';
import { PersonType, State, Environment, SplitType } from '../src/enum';

const payload: () => Emission = () => ({
  clientName: 'Nome Completo',
  clientDocument: '437.283.950-21',
  clientType: PersonType.PESSOA_FISICA,
  clientMail: 'user@example.com',
  clientSecondaryMail: 'user@example.com',
  clientPhone: '(11) 9 9999-9999',
  clientBirthDate: '2000-01-01',
  billingStreet: 'string',
  billingNumber: 'string',
  billingComplement: 'string',
  billingNeighbourhood: 'string',
  billingCity: 'string',
  billingState: State.SAO_PAULO,
  billingPostcode: '00000-000',
  description: 'string',
  reference: 'string',
  amount: 3.0,
  dueDate: moment().format('YYYY-MM-DD'),
  installments: 1,
  maxOverdueDays: 0,
  fine: 0,
  interest: 0,
  abbreviate: true,
  logo: 'https://example.com/logo.png',
  notificationUrl: 'string',
  showTop: true,
  split: true,
  splitType: SplitType.PERCENTAGE,
  splitAmount: [0, 0],
  splitToken: ['23B5E1AE45EE03313AD3C3EC0B083707', '0B34974F15D91716E9277F985FC98AC0'],
});

test('should emit boleto', async () => {
  const config: ConfigurationInterface = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const boleto: BoletoInterface = new Boleto(config);

  const response: ResponseInterface<EmissionResponse> = await boleto.emission(payload());

  expect(response.success).toBe(true);
});

test('should cancel boleto', async () => {
  const config: ConfigurationInterface = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const boleto: BoletoInterface = new Boleto(config);

  const emitResponse: ResponseInterface<EmissionResponse> = await boleto.emission(payload());

  const code = emitResponse.data.charges[0].code;

  const cancelResponse: ResponseInterface<EmissionResponse> = await boleto.cancel(code);

  expect(cancelResponse.success).toBe(true);
});

test('should consult boleto', async () => {
  const config: ConfigurationInterface = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const boleto: BoletoInterface = new Boleto(config);

  const emitResponse: ResponseInterface<EmissionResponse> = await boleto.emission(payload());

  const code = emitResponse.data.charges[0].code;

  const cancelResponse: ResponseInterface<EmissionResponse> = await boleto.consult(code);

  expect(cancelResponse.success).toBe(true);
});

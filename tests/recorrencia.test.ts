import moment from 'moment';

import { Recorrencia, Configuration } from '../src';
import {
  RecorrenciaModel,
  ConfigurationInterface,
  RecorrenciaInterface,
  ResponseInterface,
  RecorrenciaResponse,
} from '../src/interfaces';
import { PersonType, State, Environment, Frequence } from '../src/enum';

const payload: () => RecorrenciaModel = () => ({
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
  frequence: Frequence.MONTHLY,
  dayNumber: 15,
  startDate: moment().format('YYYY-MM-DD'),
  finalDate: moment().add(6, 'months').format('YYYY-MM-DD'),
});

test.only('should add recurrence', async () => {
  const config: ConfigurationInterface = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const recorrencia: RecorrenciaInterface = new Recorrencia(config);

  const response: ResponseInterface<RecorrenciaResponse> = await recorrencia.save(payload());

  expect(response.success).toBe(true);
});

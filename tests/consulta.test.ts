import moment from 'moment';

import { Consulta, Configuration } from '../src';
import {
  ConfigurationInterface,
  ConsultaInterface,
  ResponseInterface,
  BinResponse,
  ConsultaCartao,
  ConsultaCartaoResponse,
} from '../src/interfaces';
import { Environment } from '../src/enum';

test('should consult bin', async () => {
  const config: ConfigurationInterface = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const consulta: ConsultaInterface = new Consulta(config);

  const response: ResponseInterface<BinResponse> = await consulta.bin('555555');

  expect(response.success).toBe(true);
});

test('should validate cartao', async () => {
  const payload: ConsultaCartao = {
    number: '5431 0906 3635 6361',
    flag: 'mastercard',
    date: '12/2050',
    code: '123',
  };

  const config: ConfigurationInterface = new Configuration({
    token: '23B5E1AE45EE03313AD3C3EC0B083707',
    env: Environment.SANDBOX,
  });

  const consulta: ConsultaInterface = new Consulta(config);

  const response: ResponseInterface<ConsultaCartaoResponse> = await consulta.cartao(payload);

  expect(response.success).toBe(true);
});

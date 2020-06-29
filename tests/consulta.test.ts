import moment from 'moment';

import { Consulta, Configuration } from '../src';
import { ConfigurationInterface, ConsultaInterface, ResponseInterface, BinResponse } from '../src/interfaces';
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

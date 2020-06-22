# SDK de Integração Api Branvopay

## Instalação

`npm install BranvoPay`

## Uso

### Boleto

#### Emissão

```typescript
```

#### Consulta

```typescript
```

#### Cancelamento

```typescript
```

### Cartão

#### Nova Transação

##### Javascript

```javascript
import { Configuration, Cartao } from 'branvopay';
import { PersonType, State, Environment } from 'branvopay/enum';

const payload = {
  clientName: 'string',
  clientDocument: '000.000.000-00',
  clientType: PersonType.PESSOA_FISICA,
  clientMail: 'user@example.com',
  clientPhone: '(00) 0 0000-0000',
  clientSecondaryMail: 'user@example.com',
  clientBirthDate: '0000-00-00',
  billingStreet: 'string',
  billingNumber: 'string',
  billingNeighbourhood: 'string',
  billingCity: 'string',
  billingState: State.SAO_PAULO,
  billingPostcode: '00000-000',
  billingComplement: 'string',
  billingResponsible: 'string',
  deliveryStreet: 'string',
  deliveryNumber: 'string',
  deliveryNeighbourhood: 'string',
  deliveryCity: 'string',
  deliveryState: State.SAO_PAULO,
  deliveryPostcode: '00000-000',
  deliveryComplement: 'string',
  deliveryResponsible: 'string',
  cardOwnerName: 'string',
  cardOwnerType: PersonType.PESSOA_FISICA,
  cardOwnerDocument: '000.000.000-000',
  cardOwnerPhone: '(00) 0 0000-0000',
  cardFlag: 'string',
  cardNumber: 'string',
  cardMonth: '00',
  cardYear: '0000',
  cardCode: '000',
  antiFraud: true,
  orderNumber: 'string',
  value: 1,
  parcelNumber: 1,
  capture: true,
  abbreviate: true,
  ipAddress: '192.168.0.1',
  os: 'string',
  notificationUrl: 'string',
  browser: 'string',
};

const config = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao = new Cartao(config);

const response = await cartao.transaction(payload);

if (response.success) {
  const data = response.data;
} else {
  const error = response.error;
  const code = error.code;
  const message = error.message;
}
```

##### Typescript

```typescript
import { Configuration, Cartao } from 'branvopay';
import { PersonType, State, Environment } from 'branvopay/enum';
import {
  Transaction,
  ConfigurationInterface,
  CartaoInterface,
  ResponseInterface,
  TransactionResponse,
  Error,
} from 'branvopay/interfaces';

const payload: Transaction = {
  clientName: 'string',
  clientDocument: '000.000.000-00',
  clientType: PersonType.PESSOA_FISICA,
  clientMail: 'user@example.com',
  clientPhone: '(00) 0 0000-0000',
  clientSecondaryMail: 'user@example.com',
  clientBirthDate: '0000-00-00',
  billingStreet: 'string',
  billingNumber: 'string',
  billingNeighbourhood: 'string',
  billingCity: 'string',
  billingState: State.SAO_PAULO,
  billingPostcode: '00000-000',
  billingComplement: 'string',
  billingResponsible: 'string',
  deliveryStreet: 'string',
  deliveryNumber: 'string',
  deliveryNeighbourhood: 'string',
  deliveryCity: 'string',
  deliveryState: State.SAO_PAULO,
  deliveryPostcode: '00000-000',
  deliveryComplement: 'string',
  deliveryResponsible: 'string',
  cardOwnerName: 'string',
  cardOwnerType: PersonType.PESSOA_FISICA,
  cardOwnerDocument: '000.000.000-000',
  cardOwnerPhone: '(00) 0 0000-0000',
  cardFlag: 'string',
  cardNumber: 'string',
  cardMonth: '00',
  cardYear: '0000',
  cardCode: '000',
  antiFraud: true,
  orderNumber: 'string',
  value: 1,
  parcelNumber: 1,
  capture: true,
  abbreviate: true,
  ipAddress: '192.168.0.1',
  os: 'string',
  notificationUrl: 'string',
  browser: 'string',
};

const config: ConfigurationInterface = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao: CartaoInterface = new Cartao(config);

const response: ResponseInterface<TransactionResponse> = await cartao.transaction(payload);

if (response.success) {
  const data: TransactionResponse = response.data;
} else {
  const error: Error = response.error;
  const code: string = error.code;
  const message: string = error.message;
}
```

#### Split de Pagamento

```javascript
import { Configuration, Cartao } from 'branvopay';
import { PersonType, State, Environment, TaxRule, SplitType } from 'branvopay/enum';

const payload = {
  clientName: 'string',
  clientDocument: '000.000.000-00',
  clientType: PersonType.PESSOA_FISICA,
  clientMail: 'user@example.com',
  clientPhone: '(00) 0 0000-0000',
  clientSecondaryMail: 'user@example.com',
  clientBirthDate: '0000-00-00',
  billingStreet: 'string',
  billingNumber: 'string',
  billingNeighbourhood: 'string',
  billingCity: 'string',
  billingState: State.SAO_PAULO,
  billingPostcode: '00000-000',
  billingComplement: 'string',
  billingResponsible: 'string',
  deliveryStreet: 'string',
  deliveryNumber: 'string',
  deliveryNeighbourhood: 'string',
  deliveryCity: 'string',
  deliveryState: State.SAO_PAULO,
  deliveryPostcode: '00000-000',
  deliveryComplement: 'string',
  deliveryResponsible: 'string',
  cardOwnerName: 'string',
  cardOwnerType: PersonType.PESSOA_FISICA,
  cardOwnerDocument: '000.000.000-000',
  cardOwnerPhone: '(00) 0 0000-0000',
  cardFlag: 'string',
  cardNumber: 'string',
  cardMonth: '00',
  cardYear: '0000',
  cardCode: '000',
  antiFraud: true,
  orderNumber: 'string',
  value: 1,
  parcelNumber: 1,
  capture: true,
  abbreviate: true,
  ipAddress: '192.168.0.1',
  os: 'string',
  notificationUrl: 'string',
  browser: 'string',
  taxRule: TaxRule.DIVIDED,
  splitType: SplitType.PERCENTAGE,
  splitAmount: [50, 50],
  splitToken: ['23B5E1AE45EE03313AD3C3EC0B083707', '0B34974F15D91716E9277F985FC98AC0'],
};

const config = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao = new Cartao(config);

const response = await cartao.split(payload);

if (response.success) {
  const data = response.data;
} else {
  const error = response.error;
  const code = error.code;
  const message = error.message;
}
```

##### Typescript

```typescript
import { Configuration, Cartao } from 'branvopay';
import { PersonType, State, Environment, TaxRule, SplitType } from 'branvopay/enum';
import {
  Split,
  ConfigurationInterface,
  CartaoInterface,
  ResponseInterface,
  SplitResponse,
  Error,
} from 'branvopay/interfaces';

const payload: Split = {
  clientName: 'string',
  clientDocument: '000.000.000-00',
  clientType: PersonType.PESSOA_FISICA,
  clientMail: 'user@example.com',
  clientPhone: '(00) 0 0000-0000',
  clientSecondaryMail: 'user@example.com',
  clientBirthDate: '0000-00-00',
  billingStreet: 'string',
  billingNumber: 'string',
  billingNeighbourhood: 'string',
  billingCity: 'string',
  billingState: State.SAO_PAULO,
  billingPostcode: '00000-000',
  billingComplement: 'string',
  billingResponsible: 'string',
  deliveryStreet: 'string',
  deliveryNumber: 'string',
  deliveryNeighbourhood: 'string',
  deliveryCity: 'string',
  deliveryState: State.SAO_PAULO,
  deliveryPostcode: '00000-000',
  deliveryComplement: 'string',
  deliveryResponsible: 'string',
  cardOwnerName: 'string',
  cardOwnerType: PersonType.PESSOA_FISICA,
  cardOwnerDocument: '000.000.000-000',
  cardOwnerPhone: '(00) 0 0000-0000',
  cardFlag: 'string',
  cardNumber: 'string',
  cardMonth: '00',
  cardYear: '0000',
  cardCode: '000',
  antiFraud: true,
  orderNumber: 'string',
  value: 1,
  parcelNumber: 1,
  capture: true,
  abbreviate: true,
  ipAddress: '192.168.0.1',
  os: 'string',
  notificationUrl: 'string',
  browser: 'string',
  taxRule: TaxRule.DIVIDED,
  splitType: SplitType.PERCENTAGE,
  splitAmount: [50, 50],
  splitToken: ['23B5E1AE45EE03313AD3C3EC0B083707', '0B34974F15D91716E9277F985FC98AC0'],
};

const config: ConfigurationInterface = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao: CartaoInterface = new Cartao(config);

const response: ResponseInterface<SplitResponse> = await cartao.split(payload);

if (response.success) {
  const data: SplitResponse = response.data;
} else {
  const error: Error = response.error;
  const code: string = error.code;
  const message: string = error.message;
}
```

#### Cancelamento

```javascript
import { Configuration, Cartao } from 'branvopay';

const orderNumber = 'string';

const config = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao = new Cartao(config);

const response = await cartao.cancel(orderNumber);

if (response.success) {
  const data = response.data;
} else {
  const error = response.error;
  const code = error.code;
  const message = error.message;
}
```

##### Typescript

```typescript
import { Configuration, Cartao } from 'branvopay';
import {
  ConfigurationInterface,
  CartaoInterface,
  ResponseInterface,
  CancelResponse,
  Error,
} from 'branvopay/interfaces';

const orderNumber: string = 'string';

const config: ConfigurationInterface = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao: CartaoInterface = new Cartao(config);

const response: ResponseInterface<CancelResponse> = await cartao.cancel(orderNumber);

if (response.success) {
  const data: CancelResponse = response.data;
} else {
  const error: Error = response.error;
  const code: string = error.code;
  const message: string = error.message;
}
```

#### Estorno Parcial

```javascript
import { Configuration, Cartao } from 'branvopay';

const orderNumber = 'string';

const amount = 100.0;

const config = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao = new Cartao(config);

const response = await cartao.cancel(orderNumber, amount);

if (response.success) {
  const data = response.data;
} else {
  const error = response.error;
  const code = error.code;
  const message = error.message;
}
```

##### Typescript

```typescript
import { Configuration, Cartao } from 'branvopay';
import {
  ConfigurationInterface,
  CartaoInterface,
  ResponseInterface,
  CancelResponse,
  Error,
} from 'branvopay/interfaces';

const amount: number = 100.0;

const orderNumber: string = 'string';

const config: ConfigurationInterface = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao: CartaoInterface = new Cartao(config);

const response: ResponseInterface<CancelResponse> = await cartao.cancel(orderNumber, amount);

if (response.success) {
  const data: CancelResponse = response.data;
} else {
  const error: Error = response.error;
  const code: string = error.code;
  const message: string = error.message;
}
```

#### Consulta

```javascript
import { Configuration, Cartao } from 'branvopay';

const orderNumber = 'string';

const config = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao = new Cartao(config);

const response = await cartao.get(orderNumber);

if (response.success) {
  const data = response.data;
} else {
  const error = response.error;
  const code = error.code;
  const message = error.message;
}
```

##### Typescript

```typescript
import { Configuration, Cartao } from 'branvopay';
import { ConfigurationInterface, CartaoInterface, ResponseInterface, GetResponse, Error } from 'branvopay/interfaces';

const orderNumber: string = 'string';

const config: ConfigurationInterface = new Configuration({
  token: 'string',
  env: Environment.SANDBOX,
});

const cartao: CartaoInterface = new Cartao(config);

const response: ResponseInterface<GetResponse> = await cartao.get(orderNumber);

if (response.success) {
  const data: GetResponse = response.data;
} else {
  const error: Error = response.error;
  const code: string = error.code;
  const message: string = error.message;
}
```

#### Captura

```typescript
```

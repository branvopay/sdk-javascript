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

const payload = {
  clientName: 'string',
  clientDocument: '000.000.000-00',
  clientType: 'PF',
  clientMail: 'user@example.com',
  clientPhone: '(00) 0 0000-0000',
  clientSecondaryMail: 'user@example.com',
  clientBirthDate: '0000-00-00',
  billingStreet: 'string',
  billingNumber: 'string',
  billingNeighbourhood: 'string',
  billingCity: 'string',
  billingState: 'SP',
  billingPostcode: '00000-000',
  billingComplement: 'string',
  billingResponsible: 'string',
  deliveryStreet: 'string',
  deliveryNumber: 'string',
  deliveryNeighbourhood: 'string',
  deliveryCity: 'string',
  deliveryState: 'SP',
  deliveryPostcode: '00000-000',
  deliveryComplement: 'string',
  deliveryResponsible: 'string',
  cardOwnerName: 'string',
  cardOwnerType: 'PF',
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
import { Transaction } from 'branvopay/interfaces';
import { PersonType, State, Environment } from 'branvopay/enum';

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

#### Split de Pagamento

```typescript
```

#### Cancelamento

```typescript
```

#### Consulta

```typescript
```

#### Captura

```typescript
```

import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://iiv0f3tmy9.execute-api.eu-west-1.amazonaws.com/',
    order: 'https://iiv0f3tmy9.execute-api.eu-west-1.amazonaws.com/',
    import: 'https://bg6mkgzjv0.execute-api.eu-west-1.amazonaws.com//import',
    bff: 'https://iiv0f3tmy9.execute-api.eu-west-1.amazonaws.com/',
    cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: true,
    order: true,
    import: true,
    bff: true,
    cart: false,
  },
};

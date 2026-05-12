import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { ProductMock } from '../infra/product-mock';
import { ProductInfra } from '../token';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideBrowserGlobalErrorListeners(),
    {
      provide: ProductInfra,
      useClass: ProductMock
    }
  ]
};

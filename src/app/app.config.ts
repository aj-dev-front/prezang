import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import provideInfra from './providers/infra';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideInfra,
    provideRouter(routes),
    provideBrowserGlobalErrorListeners(),
  ]
};

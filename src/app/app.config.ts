import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideInfra } from './providers/infra';
import { provideUrl } from './providers/url';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideUrl,
    provideInfra,
    provideRouter(routes),
    provideBrowserGlobalErrorListeners(),
  ]
};

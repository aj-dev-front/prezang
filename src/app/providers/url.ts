import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import environment from '@environments/environment';

import { API_URL } from '../../token';

export const provideUrl: EnvironmentProviders = makeEnvironmentProviders([
  {
    provide: API_URL,
    useValue: environment.api_url,
  }
]);
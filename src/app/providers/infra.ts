import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import { ProductMock } from '../../infra/product-mock';
import { ProductInfra } from '../../token';

export default makeEnvironmentProviders([
    {
        provide: ProductInfra,
        useClass: ProductMock,
    }
]) satisfies EnvironmentProviders
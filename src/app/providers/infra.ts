import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

import { ProductBack } from '../../infra/product-back';
import { ProductInfra } from '../../token';

export const provideInfra = makeEnvironmentProviders([
    {
        provide: ProductInfra,
        useClass: ProductBack,
    }
]) satisfies EnvironmentProviders;
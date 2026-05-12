import { InjectionToken } from '@angular/core';

import { Product } from './app/product/product';
import { Infra } from './infra/infra';

export const ProductInfra = new InjectionToken<Infra<Product>>('Infra produit')
import { InjectionToken } from '@angular/core';

import { Product } from './app/product/product.model';
import { Infra } from './infra/infra';

export const ProductInfra = new InjectionToken<Infra<Product>>('Infra produit');

export const API_URL = new InjectionToken<string>('Url api back');
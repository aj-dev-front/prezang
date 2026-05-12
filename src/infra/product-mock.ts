import {
  Observable,
  of,
} from 'rxjs';

import { Product } from '../app/product/product.model';
import products from '../mocks/products.json';
import { Infra } from './infra';

export class ProductMock implements Infra<Product> {
  get(): Observable<Product[]> {
    const result: Product[] = products;
    return of(result)
  }
}

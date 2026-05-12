import {
  Observable,
  of,
} from 'rxjs';

import { Product } from '../app/product/product';
import { Infra } from './infra';

export class ProductMock implements Infra<Product> {
  get(): Observable<Product[]> {
    const result: Product[] = [{id: 1, name: 'toto'}, {id: 2, name: 'titi'}];
    return of(result)
  }
}

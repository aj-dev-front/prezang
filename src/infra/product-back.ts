import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from '../app/product/product.model';
import { Infra } from './infra';

export class ProductBack implements Infra<Product> {
  private readonly http = inject(HttpClient);

  get(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8182/products')
  }
}

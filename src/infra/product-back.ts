import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { Product } from '../app/product/product.model';
import { API_URL } from '../token';
import { Infra } from './infra';

export class ProductBack implements Infra<Product> {
  private readonly url = inject(API_URL);
  private readonly http = inject(HttpClient);

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/products')
  }
}

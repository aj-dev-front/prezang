import {
  inject,
  Injectable,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { Product } from '../app/product/product';
import { Infra } from '../infra/infra';
import { ProductInfra } from '../token';

@Injectable({
  providedIn: 'root',
})
export class ProductDomain {
  private readonly productInfra: Infra<Product> = inject(ProductInfra)

  recupererListeProduitsPagePrincipal() {
    return toSignal( this.productInfra.get())
  }
}

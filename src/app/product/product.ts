import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductDomain } from '@domain/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage {
  private readonly productsDomain = inject(ProductDomain);

  protected readonly products = this.productsDomain.recupererListeProduitsPagePrincipal();
}

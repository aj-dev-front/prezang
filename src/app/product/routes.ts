import { inject } from '@angular/core';
import {
  CanActivateFn,
  Routes,
} from '@angular/router';

import { Auth } from '../profil/auth';
import { Consulter } from './consulter-product';
import { DetailProduct } from './detail-product';
import { ProductPage } from './product';

const productGuard: CanActivateFn = () => {
    const auth = inject(Auth);
    return auth.canAccessProduct()
}

export default [
    {
        path: '', // /products
        component: ProductPage,

    },
    {
        path: 'consulter', // /products/consulter
        component: Consulter
    },
    {
        path: ':yoyoyo', // /products/1, /products/34, product/hello
        component: DetailProduct,
    },
] satisfies Routes;

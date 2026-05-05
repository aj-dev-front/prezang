import { Routes } from '@angular/router';

import profilRoutes from './profil/routes';

export const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('./product/routes').then(r => r.default),
    },
    {
        path: 'profil',
        children: profilRoutes,
    },
];

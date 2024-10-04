import { Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductComponent,
    loadChildren: () =>
      import('./components/product/product-routing.module').then(
        (m) => m.ProductRoutingModule
      ),
  },
];

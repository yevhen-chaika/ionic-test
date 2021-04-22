import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full'
  },
  {
    path: 'products-list',
    component: ProductListComponent,
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

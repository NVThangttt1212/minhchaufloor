import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'construction', loadChildren: () => import('./components/construction/construction.module').then(m => m.ConstructionModule) },
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
  { path: 'product', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) },
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

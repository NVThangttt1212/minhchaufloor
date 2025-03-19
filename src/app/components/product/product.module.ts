import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CarouselModule } from 'primeng/carousel';

const routes: Routes = [
    { path: '', component: ProductComponent }
];

@NgModule({
  declarations: [
    ProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild(routes)
    
  ],
  exports:[
    DetailProductComponent
  ]
})
export class ProductModule { }

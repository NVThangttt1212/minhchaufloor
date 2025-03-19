import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionComponent } from './construction.component';
import { RouterModule } from '@angular/router';
import { DetailConstructionComponent } from './detail-construction/detail-construction.component';



@NgModule({
  declarations: [
    ConstructionComponent,
    DetailConstructionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ConstructionComponent }])
  ]
})
export class ConstructionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionComponent } from './construction.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConstructionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ConstructionComponent }])
  ]
})
export class ConstructionModule { }

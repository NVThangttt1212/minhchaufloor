import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ]
})
export class HomeModule { }

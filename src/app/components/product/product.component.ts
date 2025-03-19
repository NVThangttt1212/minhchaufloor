import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  listProduct:{
    id: number
    name: string,
    img: string,
    des: string

  }[] = []


  constructor(
    private route : Router,
    private subject: SubjectService,
    private dataService: DataService
  ){

  }
 
  ngOnInit(): void {
    this.scrollToTop()
    this.listProduct = this.dataService.listProduct
  }

  scrollToTop(){
    window.scrollTo({top:0})
  }

  detailProduct(product: any) {
    if (!product || !product.id) {
      return;
    }
    localStorage.setItem('routing', String('product/'+ product.id))
    this.subject.routing.next(product.id)
    this.route.navigate([`product/${product.id}`]); 
  }
}

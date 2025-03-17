import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private subject: SubjectService
  ){

  }
 
  ngOnInit(): void {
    this.scrollToTop()
    this.listProduct = [
      { id: 1, name: 'Laptop', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm' },
      { id: 2, name: 'Smartphone', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
      { id: 3, name: 'Headphones', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm' },
      { id: 4,  name: 'Keyboard', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
      { id: 5,  name: 'Monitor', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
      { id: 6,  name: 'Headphones', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm' },
      { id: 7,  name: 'Keyboard', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
      { id: 8,  name: 'Monitor', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
      { id: 9,  name: 'Headphones', img: '../../../assets/img/Thăng.jpg' , des: 'mô tả sản phẩm'},
      { id: 10,  name: 'Keyboard', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
      { id: 11,  name: 'Monitor', img: '../../../assets/img/Thăng.jpg', des: 'mô tả sản phẩm'},
      
    ];
  
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

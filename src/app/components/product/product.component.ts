import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  listProduct:{
    name: string,
    img: string,
    material: string,
    des: string,
    price: number
  }[] = []

 
  ngOnInit(): void {
    this.scrollToTop()
    this.listProduct = [
      { name: 'Sản phẩm A', img: '../../../assets/img/Thăng.jpg', material: 'Da cao cấp', des: 'Chất liệu bền đẹp, chống nước', price: 1200000 },
      { name: 'Sản phẩm B', img: '../../../assets/img/Thăng.jpg', material: 'Thép không gỉ', des: 'Thiết kế sang trọng, hiện đại', price: 850000 },
      { name: 'Sản phẩm C', img: '../../../assets/img/Thăng.jpg', material: 'Nhựa ABS', des: 'Siêu nhẹ, bền bỉ theo thời gian', price: 650000 },
      { name: 'Sản phẩm D', img: '../../../assets/img/Thăng.jpg', material: 'Gỗ tự nhiên', des: 'Phong cách cổ điển, tinh tế', price: 1500000 },
      { name: 'Sản phẩm E', img: '../../../assets/img/Thăng.jpg', material: 'Sợi carbon', des: 'Siêu bền, chịu lực tốt', price: 1950000 }
    ];
  
  }

  scrollToTop(){
    window.scrollTo({top:0})
  }
}

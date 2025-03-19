import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit{
  listData: any[] = []
  dataProduct:{
    id: number
    name: string,
    img: string,
    des: string
  } | any = null
  constructor(
    private route : ActivatedRoute,
    private dataService: DataService
  ){

  }

  ngOnInit(): void {
    window.scrollTo({ top: 0});

    this.route.params.subscribe((param:any)=>{
      if(param){
        this.dataProduct = this.dataService.listProduct.find(item => item.id === Number(param.id))
        this.listData = this.dataService.listProduct.filter(e => e.id !== Number(param.id))
      }
    })
  }
  detailProduct(product:any): void{
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.dataProduct = product
    this.listData = this.dataService.listProduct.filter(e => e.id !== Number(product.id))
  }
}

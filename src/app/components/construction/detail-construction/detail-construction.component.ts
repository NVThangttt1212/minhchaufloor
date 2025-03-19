import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-detail-construction',
  templateUrl: './detail-construction.component.html',
  styleUrls: ['./detail-construction.component.scss']
})
export class DetailConstructionComponent implements OnInit{
  project:{  
    id?: number, 
    adress?: string,
    urlImg: string,
    title: string,
    nameCustomer?: string,
    timeFrom?: Date,
    timeTo?: Date,
    des?:string,
    feedback?: number 
  }| any
  listData: any
  stars = Array(5).fill(0).map((_, i) => i + 1);

  constructor(
    private route : ActivatedRoute,
    private dataService: DataService
  ){

  }
  ngOnInit(): void {
    window.scrollTo({ top: 0});
    this.route.params.subscribe((param:any)=>{
      console.log(param)
      if(param){
        this.project = this.dataService.construction.find(item => item.id === Number(param.id))
        this.listData = this.dataService.construction.filter(e => e.id !== Number(param.id))
      }
    })
  }

  back(){
    window.history.back()
  }
}

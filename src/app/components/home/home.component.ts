import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/service/subject.service';
interface typeSilder {
  urlImg: string,
  title: string,
  des: string
}
interface listConstruction {
    urlImg: string,
    title: string,
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  listImg: typeSilder[] = []
  construction: listConstruction[] = []
  products: any[] | undefined;
  responsiveOptions: any[] | undefined;
  constructor(
    private route : Router,
    private subject: SubjectService
  ){

  }

  ngOnInit(): void{
    this.listImg = [
      {
        urlImg: '../../../assets/img/Thăng.jpg',
        title: 'Dự án thứ nhất',
        des: 'đây là mô tả cho dự án 1'
      },
      {
        urlImg: '../../../assets/img/Thăng.jpg',
        title: 'Dự án thứ hai',
        des: 'đây là mô tả cho dự án 2'
      },
      {
        urlImg: '../../../assets/img/Thăng.jpg',
        title: 'Dự án thứ ba',
        des: 'đây là mô tả cho dự án 3'
      }
    ]
    this.construction = [
      {urlImg: '../../../assets/img/Thăng.jpg', title: 'dự án 1'},
      {urlImg: '../../../assets/img/Thăng.jpg', title: 'dự án 2'},
      {urlImg: '../../../assets/img/Thăng.jpg', title: 'dự án 3'},
      {urlImg: '../../../assets/img/Thăng.jpg', title: 'dự án 4'},
      {urlImg: '../../../assets/img/Thăng.jpg', title: 'dự án 5'},
      {urlImg: '../../../assets/img/Thăng.jpg', title: 'dự án 6'},
      {urlImg: '../../../assets/img/Thăng.jpg', title: 'dự án 7'},
      {urlImg: '../../../assets/img/Thăng.jpg', title: 'dự án 8'}
    ]
  }
  routingConstruction(){
    this.route.navigate(['construction']);
    this.subject.routing.next('construction')
  }
}

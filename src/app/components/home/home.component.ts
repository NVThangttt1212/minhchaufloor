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
export class HomeComponent implements OnInit, AfterViewInit{
  listImg: typeSilder[] = []
  construction: listConstruction[] = []
  products: any;
  responsiveOptions: any[] | undefined;
  constructor(
    private route : Router,
    private subject: SubjectService
  ){

  }

  ngOnInit(): void{
    this.listImg = [
      {
        urlImg: '../../../assets/img/bgsan.jpg',
        title: 'Dự án thứ nhất',
        des: 'đây là mô tả cho dự án 1'
      },
      {
        urlImg: '../../../assets/img/bgsan.jpg',
        title: 'Dự án thứ hai',
        des: 'đây là mô tả cho dự án 2'
      },
      {
        urlImg: '../../../assets/img/bgsan.jpg',
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
    this.products = [
      { name: 'Laptop', image: '../../../assets/img/Thăng.jpg' },
      { name: 'Smartphone', image: '../../../assets/img/Thăng.jpg'},
      { name: 'Headphones', image: '../../../assets/img/Thăng.jpg' },
      { name: 'Keyboard', image: '../../../assets/img/Thăng.jpg'},
      { name: 'Monitor', image: '../../../assets/img/Thăng.jpg'},
      { name: 'Headphones', image: '../../../assets/img/Thăng.jpg' },
      { name: 'Keyboard', image: '../../../assets/img/Thăng.jpg'},
      { name: 'Monitor', image: '../../../assets/img/Thăng.jpg'},
      { name: 'Headphones', image: '../../../assets/img/Thăng.jpg' },
      { name: 'Keyboard', image: '../../../assets/img/Thăng.jpg'},
      { name: 'Monitor', image: '../../../assets/img/Thăng.jpg'},
      
    ];
  }

  
  ngAfterViewInit(): void {
    const items = document.querySelectorAll(".item1, .item2");
  
    function handleScroll() {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
  
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
          item.classList.add("show"); 
        } else {
          item.classList.remove("show"); 
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
  }  
  routing(page: string){
    this.route.navigate([page]);
    this.subject.routing.next(page)
  }

  detailProduct(product: any){

  }

  

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}

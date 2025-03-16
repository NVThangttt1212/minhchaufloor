import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
interface typeFeedback {
  name: string,
  img: string
  star:number,
  des: string

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit{
  @ViewChild('constructionSection') constructionSection!: ElementRef;
  @ViewChild('company') company!: ElementRef;
  listImg: typeSilder[] = []
  construction: listConstruction[] = []
  listFeed: typeFeedback[] = []
  products: any;
  numVisibleItems: number = 2;
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true, 
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false
  };
  constructor(
    private route : Router,
    private subject: SubjectService
  ){

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateNumVisible();
  }

  updateNumVisible() {
    if (window.innerWidth < 768) {
      this.numVisibleItems = 1;
    } else {
      this.numVisibleItems = 2;
    }
  }

  scrollToTop(){
    window.scrollTo({top:0})
  }
  
  ngOnInit(): void{
    this.updateNumVisible();
    this.scrollToTop()

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
    this.listFeed = [
      {
        name: 'Nguyễn Văn Thăng',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 4
      },
      {
        name: 'Phạm Thị Hoa',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 5
      },
      {
        name: 'Nguyễn Văn Thăng',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 3
      },
      {
        name: 'Nguyễn Văn Thăng',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 4
      },
      {
        name: 'Phạm Thị Hoa',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 5
      },
      {
        name: 'Nguyễn Văn Thăng',
        des: 'sản phẩm cũng rất tốt nhưng ăn cùng mắm tôm thì ngon tuyệt vời',
        img: '../../../assets/img/Thăng.jpg',
        star: 3
      },
    ]
  }

  
  ngAfterViewInit(): void {
    this.handleConstruction()
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
    this.handleCompany()
  }

  handleCompany(){
   const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.company.nativeElement.classList.add('show');
        }else {
          this.company.nativeElement.classList.remove('show');
        }
      },
      { threshold: 0.6 } 
    );

    observer.observe(this.company.nativeElement);
  }

  handleConstruction(){
    const items = this.constructionSection.nativeElement.querySelectorAll('.item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); 
        }
      });
    }, { threshold: 0.5 });

    items.forEach((item: any) => observer.observe(item));
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



import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/service/subject.service';
interface btnType {
  name: string,
  route: string,
  active: boolean
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit{
  listBtn:btnType[] = [] 
  url: any = null
  outTop: boolean = false
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subject :SubjectService
  ) {
  }
  isHidden = true; 
  lastScrollTop = 0; 

  @HostListener("window:scroll", [])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    this.outTop = scrollPosition > 400;
    
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      this.isHidden = true;
    } else {

      this.isHidden = false;
    }
    console.log(this.isHidden)
    this.lastScrollTop = st <= 0 ? 0 : st; 
  }
   
  handleActiveBtn(){
  }

  ngOnInit(): void {
    this.handleActiveBtn()
    this.subject.url.subscribe(data=>{ 
      this.listBtn.forEach((e:btnType, index: number)=>{
        e.active = false
        if(e.route === data){
          this.listBtn[index] = {
            ...e,
            active: true
          }
        }
      })
    })
    this.listBtn = [
      { name: 'Trang chủ', route: 'home', active: true },
      { name: 'Giới thiệu', route: 'about', active: false },
      { name: 'Sản phẩm', route: 'product', active: false },
      { name: 'Dự án thi công', route: 'construction', active: false },
      { name: 'Liên hệ', route: 'contact', active: false },
    ]
    const curentUrl = sessionStorage.getItem('routing')
    this.url = curentUrl || 'home'
    if(curentUrl){
      this.listBtn.forEach((e:btnType)=>{
        e.active = false
        if(e.route === curentUrl){
          e.active = true
        }
      })
      console.log('list', this.listBtn)
    }
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }else{
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('.animated').forEach((el) => observer.observe(el));
  }

  handleRouting(item :btnType){
    this.url = item.route
    sessionStorage.setItem('routing', item.route)
    this.listBtn.forEach((e:btnType)=>{
      e.active = false
      if(e.name === item.name){
        item.active = true
      }
    })
    this.router.navigate([item.route]);
  }
  scollTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

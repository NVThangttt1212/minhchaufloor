import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/service/subject.service';
interface btnType {
  name?: string,
  route: string,
  active: boolean
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  listBtn:btnType[] = [] 
  constructor(
    private router: Router,
    private subject :SubjectService
  ) {
  }
  isHidden = false; 
  lastScrollTop = 0; 

  @HostListener("window:scroll", [])
  onScroll(): void {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (st > this.lastScrollTop) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st; 
  }

  ngOnInit(): void {
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
  }
  handleRouting(item :btnType){
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

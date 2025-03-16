import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  implements OnInit,AfterViewInit{
  @ViewChild('container', { static: false }) container!: ElementRef;

  scrollToTop(){
    window.scrollTo({top:0})
  }

  ngOnInit(): void {
    this.scrollToTop()
  }

  openEmail() {
    const email = 'info@minhchaufloor.com';
    const subject = encodeURIComponent('Liên hệ khách hàng tới email công ty');
    const body = encodeURIComponent('Nội dung email...');

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  }


  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animated').forEach((el) => observer.observe(el));
  }
}

import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit{
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  ngAfterViewInit(): void {
    this.loadFacebookSDK();
    this.loadZaloSDK()
    this.scrollToTop()
  }

  scrollToTop(){
    window.scrollTo({top:0})
  }
  

  submitForm() {
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
    this.contact = { name: '', email: '', phone: '', message: '' }; // Reset form
  }

  loadFacebookSDK() {
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }

  loadZaloSDK() {
    if ((window as any).zaloAsyncInit) {
      (window as any).zaloAsyncInit();
    }
  }
  
}

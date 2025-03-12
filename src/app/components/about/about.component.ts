import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  openEmail() {
    const email = 'info@minhchaufloor.com';
    const subject = encodeURIComponent('Liên hệ khách hàng tới email công ty');
    const body = encodeURIComponent('Nội dung email...');

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  }
}

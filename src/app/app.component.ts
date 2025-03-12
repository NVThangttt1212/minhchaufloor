import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MinhChaufloor';

  callUser(type: string) {
    if(type === 'phone'){
      window.location.href = `tel:${'0393371798'}`;
    }else{
      window.open('https://zalo.me/0393371798', '_blank');
    }
  }
  
}

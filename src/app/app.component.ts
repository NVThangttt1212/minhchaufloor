import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MinhChaufloor';

  callUser() {
    window.location.href = `tel:${'0393371798'}`;
  }
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit{
  ngOnInit(): void {
    this.scrollToTop()
  }

  scrollToTop(){
    window.scrollTo({top:0})
  }
}

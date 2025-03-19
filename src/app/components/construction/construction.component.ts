import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit{
  projects: any
  constructor(
    private dataService: DataService,
    private route : Router,
    private subject: SubjectService,
  ){

  }
  ngOnInit(): void {
    this.scrollToTop()
    this.projects = this.dataService.construction
  }

  scrollToTop(){
    window.scrollTo({top:0})
  }

  detailConstruction(project: any){
    if (!project || !project.id) {
      return;
    }
    localStorage.setItem('routing', String('construction/'+ project.id))
    this.subject.routing.next(project.id)
    this.route.navigate([`construction/${project.id}`]);  
  }
}

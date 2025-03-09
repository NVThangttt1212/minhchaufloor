import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  routing = new BehaviorSubject<string>('');
  url = this.routing.asObservable();
  constructor() { }
 
}

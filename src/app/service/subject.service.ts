import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  routing = new Subject<string>
  constructor() { }
 
}

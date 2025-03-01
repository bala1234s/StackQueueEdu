import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllCoursesService {

constructor(private http : HttpClient) { }
  getAllCourse(){
    // return this.http.get<any>('http://localhost:3001/courses');
    return this.http.get<any>('https://l8b125f3-3001.inc1.devtunnels.ms/courses');
  }
}

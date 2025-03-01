import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllCoursesService {

constructor(private http : HttpClient) { }
  getAllCourse(){
    // return this.http.get<any>('http://localhost:3001/courses');
    return this.http.get<any>('https://stack-queue-v1-0.vercel.app/courses');
  }
}

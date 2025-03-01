import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllInternshipsService {
 
  constructor(private http: HttpClient) { }

  // private api = 'http://localhost:3001/';
  private api = 'https://l8b125f3-3001.inc1.devtunnels.ms'
  getAllInternships() {
    return this.http.get(`${this.api}/internships`);
  }
  postInternship(data: any) {
    return this.http.post(`${this.api}/postInternshipEnquiry`, data);
  }
}

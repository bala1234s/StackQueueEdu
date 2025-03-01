import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private api = "http://localhost:3001/contactUs";

  constructor(private http : HttpClient) { }
  postContact(data:any) {
    return this.http.post<any>(this.api , data);
  }
}

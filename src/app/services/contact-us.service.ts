import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private api = "https://stack-queue-v1-0.vercel.app/contactUs";

  constructor(private http : HttpClient) { }
  postContact(data:any) {
    return this.http.post<any>(this.api , data);
  }
}

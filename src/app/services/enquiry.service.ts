import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  // private api = "http://localhost:3001/postEnquiry";
  private api = "https://l8b125f3-3001.inc1.devtunnels.ms/postEnquiry";
  formData : FormData = new FormData();


  constructor(private http : HttpClient) {

   }
  enquiryRegister(data:any){

   
    // this.formData.append('name',data.name);
    // this.formData.append('email',data.email);
    // this.formData.append('location',data.location);
    // this.formData.append('phone',data.phone);

    this.submitForm(data);

  }

  submitForm(form:any){
    return this.http.post<any>(this.api, form);
  }
}

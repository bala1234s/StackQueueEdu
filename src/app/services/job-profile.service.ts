import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobProfileService {

  private api = 'https://stack-queue-v1-0.vercel.app'

  constructor(private http: HttpClient) { }
  
  postJobProfile(profile: any) { 
   
    
    return this.http.post<any>(`${this.api}/postJobProfile`, profile)
      .pipe(
        catchError(error => {
          console.error('Error posting job profile:', error);
          return throwError(error);
        })
      );
  }
}

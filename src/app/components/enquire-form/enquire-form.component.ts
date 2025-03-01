import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryService } from 'src/app/services/enquiry.service';
declare var Swal: any;

@Component({
  selector: 'app-enquire-form',
  templateUrl: './enquire-form.component.html',
  styleUrls: ['./enquire-form.component.css']
})
export class EnquireFormComponent {
  course: any;
  selectCourse: any;
  lengthlang: any;
  loading = false; // Added loading state

  constructor(
    private route: Router,
    private enquiryForm: EnquiryService,
    private form: FormBuilder
  ) {
    this.course = sessionStorage.getItem('selectCourse');
    this.selectCourse = this.course ? JSON.parse(this.course) : { course_name: '', course_languages: [], course_syllabus: [], course_completion: [], scope_course: [] };
    if (this.selectCourse) {
     
      this.lengthlang = this.selectCourse.course_languages.length;
      
    }
  }

  enquiry = this.form.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    location: ['', Validators.required],
    phone: ['', Validators.required],
    course: [sessionStorage.getItem('course_name'), Validators.required]
  });

  submitForm() {
    if (this.enquiry.valid) {
      this.loading = true; // Show loading overlay
      this.enquiryForm.submitForm(this.enquiry.value).subscribe(
        (response: any) => {
          this.loading = false; // Hide loading overlay
          Swal.fire({
            title: 'Success!',
            text: 'Your enquiry is submitted, check your mail',
            icon: 'success',
            confirmButtonText: 'Okay'
          });
          this.route.navigate(['/course'])
        },
        (error: any) => {
          this.loading = false; // Hide loading overlay
          Swal.fire({
            title: 'Error!',
            text: 'Something went wrong, please try again later',
            icon: 'error',
            confirmButtonText: 'Okay'
          });
        }
      );
    }
    else { 
      // console.log("knkj");
      
       Swal.fire({
            title: 'Error!',
            text: 'please fill the enquiry form',
            icon: 'error',
            confirmButtonText: 'Okay'
          });
    }
  }

  scrollToDetails() {
    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
  }
}

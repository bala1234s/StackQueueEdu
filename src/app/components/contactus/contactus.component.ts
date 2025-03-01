import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us.service';
declare var Swal: any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  brownbox: any;
  isLoading: boolean = false;

  constructor(private form: FormBuilder , private contact : ContactUsService){
    this.brownbox=document.getElementsByClassName("test")[0];
    

  }
  contactForm = this.form.group({
    name:['',Validators.required],
    email:['',Validators.required],
    number:['',Validators.required],
    message:['',Validators.required]

  });
 
  submitContactForm() {
  if (this.contactForm.valid) {
    this.isLoading = true; // Start loading
    this.contact.postContact(this.contactForm.value).subscribe({
      next: () => {
        this.isLoading = false; // Stop loading
        Swal.fire({
          title: 'Success!',
          text: 'Your enquiry is submitted, check your mail',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      },
      error: (err) => {
        this.isLoading = false; // Stop loading on error
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
        console.error(err);
      }
    });

  }
  else {
    Swal.fire({
      title: 'Error!',
      text: 'Please fill all fields',
      icon: 'error',
      confirmButtonText: 'Okay'
    });
  }
}






}

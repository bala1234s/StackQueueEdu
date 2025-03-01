import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllInternshipsService } from 'src/app/services/all-internships.service';
declare var Swal: any;

@Component({
  selector: 'app-internship-booking',
  templateUrl: './internship-booking.component.html',
  styleUrls: ['./internship-booking.component.css']
})
export class InternshipBookingComponent {
  internship: any;
  bookingForm: FormGroup;
  showForm = false;
  calculatedFees: string = '';
  showOtherDuration = false;
  selectedDuration: string = '1 month';
  loading: any;

  constructor(private allInternshipsService: AllInternshipsService, private fb: FormBuilder, private router: Router) {
    const intern = sessionStorage.getItem('selectInternship');
    this.internship = intern ? JSON.parse(intern) : null;
    console.log(this.internship);

    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      duration: ['1 month', Validators.required],
      otherDuration: ['']
    });

    this.bookingForm.get('duration')?.valueChanges.subscribe(() => {
      this.updateFees();
    });

    this.bookingForm.get('otherDuration')?.valueChanges.subscribe(() => {
      this.updateFees();
    });

    this.updateFees();
  }

  updateFees() {
      if (!this.internship) {
      this.calculatedFees = '';
      this.showOtherDuration = false;
      return;
    }
    const duration = this.bookingForm.get('duration')?.value;
    this.selectedDuration = duration;
    if (duration === '15 days') {
      this.calculatedFees = this.internship.internship_15days_fees;
      this.showOtherDuration = false;
    } else if (duration === '1 month') {
      this.calculatedFees = this.internship.internship_month_fees;
      this.showOtherDuration = false;
    } else if (duration === '2 months') {
      this.calculatedFees = (parseInt(this.internship.internship_month_fees) * 2).toString();
      this.showOtherDuration = false;
    } else if (duration === 'other') {
      this.showOtherDuration = true;
      const otherDuration = this.bookingForm.get('otherDuration')?.value;
      if (otherDuration) {
        this.selectedDuration = `${otherDuration} month(s)`;
        this.calculatedFees = (parseInt(this.internship.internship_month_fees) * otherDuration).toString();
      } else {
        this.calculatedFees = '';
      }
    } else {
      this.calculatedFees = '';
      this.showOtherDuration = false;
    }
  }

    onSubmit() {
      if (this.bookingForm.valid) {
        this.loading = true;
        this.bookingForm.value.price = this.calculatedFees; // Add the price field
      
        // this.bookingForm.value.internship_id = this.internship.id;
        // Handle form submission logic here
        this.allInternshipsService.postInternship(this.bookingForm.value).subscribe((response) => {
          
          this.loading = false;
          Swal.fire({
            title: 'Internship enquired successfully',
            text: 'Our team will get in touch with you soon',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['/internships']);

        }, (error) => {
          this.loading = false;
          console.log(error);
          Swal.fire({
            title: 'Failed to enquire internship',
            text: 'Please try again later',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        });
      }
      else { 
        Swal.fire({
          title: 'Form validation error',
          text: 'Please fill all the required fields',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }

  scrollToCourse() {
    const element = document.getElementById('course-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
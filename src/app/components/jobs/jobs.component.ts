import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobProfileService } from 'src/app/services/job-profile.service';
declare var Swal: any;
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobProfileForm!: FormGroup;
  isLoading = false; // Add loading state

  constructor(private fb: FormBuilder , private jobProfile : JobProfileService) {}

  ngOnInit(): void {
    this.jobProfileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      position: ['', Validators.required],
      experience: ['', Validators.required],
      resume: [null, Validators.required]
    });
  }

onFileChange(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.jobProfileForm.patchValue({
        resume: reader.result, // Set Base64 string
      });
      const uploadLabel = document.getElementById('resume-label');
      if (uploadLabel) {
        uploadLabel.classList.add('uploaded');
        uploadLabel.textContent = 'Uploaded';
      }
    };
    reader.readAsDataURL(file); // Convert file to Base64 string
  }
}



  onSubmit(): void {
    if (this.jobProfileForm.valid) {
      this.isLoading = true; // Set loading state to true
      this.jobProfile.postJobProfile(this.jobProfileForm.value).subscribe(
        (data) => {
          this.isLoading = false; // Set loading state to false
          Swal.fire('Success', 'Your job profile has been submitted successfully', 'success');
        },
        (error) => {
          this.isLoading = false; // Set loading state to false
          Swal.fire('Error', 'An error occurred while submitting your profile', 'error');
        }
      );
    }
    else { 
      Swal.fire('Error', 'Please fill all the fields', 'error');
    }
  }
}

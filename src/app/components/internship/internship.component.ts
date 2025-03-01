import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllInternshipsService } from 'src/app/services/all-internships.service';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent {
  internships: any;
  filteredInternships: any = []; // Initialize as an empty array
  searchTerm: string = ''; // Ensure this is a string
  loading: boolean = true; // Start with loading as true
  skeletons: number[] = Array(6).fill(0); // Add this line

  constructor(private allInternshipsService: AllInternshipsService, private route: Router) {
    this.fetchInternships();
  }

  fetchInternships() {
    this.allInternshipsService.getAllInternships().subscribe({
      next: (internships) => {
        this.internships = internships;
        this.filteredInternships = this.internships.allInternships; // Assign after data fetching
        this.loading = false; // Turn off the loading spinner
        this.triggerAnimations(); // Trigger animations after loading
      },
      error: (err) => {
        console.error('Error fetching internships:', err);
        this.loading = false; // Turn off the loading spinner in case of an error
      }
    });
  }

  triggerAnimations() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('fade-in');
      }, index * 100); // Stagger the animation
    });
  }

  filterInternships() {
    if (!this.internships?.allInternships) return; // Avoid errors during filtering
    this.filteredInternships = this.internships.allInternships.filter((internship: any) =>
      internship.internship_title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  apply(internship: any) {
    sessionStorage.setItem('selectInternship', JSON.stringify(internship));
    this.route.navigate(['/internshipBooking']);
  }
}

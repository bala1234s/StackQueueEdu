import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { InternshipComponent } from './internship.component';
import { AllInternshipsService } from 'src/app/services/all-internships.service'; // Import AllInternshipsService
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component'; // Import FooterComponent

describe('InternshipComponent', () => {
  let component: InternshipComponent;
  let fixture: ComponentFixture<InternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternshipComponent, NavbarComponent, FooterComponent], // Add FooterComponent to declarations
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule], // Add FormsModule to imports
      providers: [AllInternshipsService] // Provide AllInternshipsService
    });
    fixture = TestBed.createComponent(InternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

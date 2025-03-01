import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import

import { InternshipBookingComponent } from './internship-booking.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('InternshipBookingComponent', () => {
  let component: InternshipBookingComponent;
  let fixture: ComponentFixture<InternshipBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule // Add this module
      ],
      declarations: [InternshipBookingComponent, NavbarComponent]
    });
    fixture = TestBed.createComponent(InternshipBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

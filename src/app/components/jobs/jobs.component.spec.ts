import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { NavbarComponent } from '../navbar/navbar.component'; // Import NavbarComponent
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule

import { JobsComponent } from './jobs.component';

describe('JobsComponent', () => {
  let component: JobsComponent;
  let fixture: ComponentFixture<JobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsComponent, NavbarComponent], // Include NavbarComponent
      imports: [HttpClientModule, ReactiveFormsModule, RouterTestingModule] // Add RouterTestingModule
    });
    fixture = TestBed.createComponent(JobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { RouterTestingModule } from '@angular/router/testing'; // Import RouterTestingModule

import { EnquireFormComponent } from './enquire-form.component';
import { EnquiryService } from 'src/app/services/enquiry.service'; // Import EnquiryService

describe('EnquireFormComponent', () => {
  let component: EnquireFormComponent;
  let fixture: ComponentFixture<EnquireFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquireFormComponent],
      imports: [
        HttpClientTestingModule, // Add HttpClientTestingModule
        ReactiveFormsModule, // Add ReactiveFormsModule
        RouterTestingModule // Add RouterTestingModule
      ],
      providers: [EnquiryService] // Provide EnquiryService
    });
    fixture = TestBed.createComponent(EnquireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

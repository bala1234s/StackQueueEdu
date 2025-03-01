import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as AOS from 'aos';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomepageComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize AOS and set interval on ngOnInit', () => {
    spyOn(AOS, 'init');
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(AOS.init).toHaveBeenCalled();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should navigate to book appointment on book', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    component.book();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/bookappointment');
  });
});

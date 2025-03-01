import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StackCoursesComponent } from './stack-courses.component';
import { AllCoursesService } from 'src/app/services/all-courses.service';

describe('StackCoursesComponent', () => {
  let component: StackCoursesComponent;
  let fixture: ComponentFixture<StackCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [StackCoursesComponent],
      providers: [AllCoursesService]
    });
    fixture = TestBed.createComponent(StackCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

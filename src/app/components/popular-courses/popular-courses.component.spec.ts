import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PopularCoursesComponent } from './popular-courses.component';

describe('PopularCoursesComponent', () => {
  let component: PopularCoursesComponent;
  let fixture: ComponentFixture<PopularCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularCoursesComponent],
      imports: [HttpClientTestingModule] // Add HttpClientTestingModule here
    });
    fixture = TestBed.createComponent(PopularCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

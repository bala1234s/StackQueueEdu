import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Add this line
import { NextGenCoursesComponent } from './next-gen-courses.component';

describe('NextGenCoursesComponent', () => {
  let component: NextGenCoursesComponent;
  let fixture: ComponentFixture<NextGenCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextGenCoursesComponent],
      imports: [HttpClientModule] // Add this line
    });
    fixture = TestBed.createComponent(NextGenCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

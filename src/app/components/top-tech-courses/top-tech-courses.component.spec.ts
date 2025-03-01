import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Add this line
import { TopTechCoursesComponent } from './top-tech-courses.component';
import { AllCoursesService } from 'src/app/services/all-courses.service'; // Add this line

describe('TopTechCoursesComponent', () => {
  let component: TopTechCoursesComponent;
  let fixture: ComponentFixture<TopTechCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTechCoursesComponent],
      imports: [HttpClientModule], // Add this line
      providers: [AllCoursesService] // Add this line
    });
    fixture = TestBed.createComponent(TopTechCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

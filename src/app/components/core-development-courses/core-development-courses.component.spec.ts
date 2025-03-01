import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Add this line
import { CoreDevelopmentCoursesComponent } from './core-development-courses.component';

describe('CoreDevelopmentCoursesComponent', () => {
  let component: CoreDevelopmentCoursesComponent;
  let fixture: ComponentFixture<CoreDevelopmentCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreDevelopmentCoursesComponent],
      imports: [HttpClientModule] // Add this line
    });
    fixture = TestBed.createComponent(CoreDevelopmentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllCoursesService } from './all-courses.service';

describe('AllCoursesService', () => {
  let service: AllCoursesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [AllCoursesService]
    });
    service = TestBed.inject(AllCoursesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all courses', () => {
    const dummyCourses = [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }];
    service.getAllCourse().subscribe(courses => {
      expect(courses).toEqual(dummyCourses);
    });

    const req = httpMock.expectOne('https://l8b125f3-3001.inc1.devtunnels.ms/courses');
    expect(req.request.method).toBe('GET');
    req.flush(dummyCourses);
  });
});

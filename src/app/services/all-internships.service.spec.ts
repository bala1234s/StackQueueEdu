import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AllInternshipsService } from './all-internships.service';

describe('AllInternshipsService', () => {
  let service: AllInternshipsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [AllInternshipsService]
    });
    service = TestBed.inject(AllInternshipsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all internships', () => {
    const dummyInternships = [{ id: 1, name: 'Internship 1' }, { id: 2, name: 'Internship 2' }];
    service.getAllInternships().subscribe(internships => {
      expect(internships).toEqual(dummyInternships);
    });

    const req = httpMock.expectOne(`${service['api']}/internships`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyInternships);
  });

  it('should post an internship', () => {
    const dummyData = { name: 'New Internship' };
    service.postInternship(dummyData).subscribe(response => {
      expect(response).toEqual(dummyData);
    });

    const req = httpMock.expectOne(`${service['api']}/postInternshipEnquiry`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyData);
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobProfileService } from './job-profile.service';

describe('JobProfileService', () => {
  let service: JobProfileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobProfileService]
    });
    service = TestBed.inject(JobProfileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post job profile', () => {
    const mockProfile = { name: 'Test Profile' };
    const mockResponse = { success: true };

    service.postJobProfile(mockProfile).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service['api']}/postJobProfile`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should handle error on post job profile', () => {
    const mockProfile = { name: 'Test Profile' };
    const mockError = { status: 500, statusText: 'Server Error' };

    service.postJobProfile(mockProfile).subscribe(
      () => fail('should have failed with the 500 error'),
      (error) => {
        expect(error.status).toEqual(500);
      }
    );

    const req = httpMock.expectOne(`${service['api']}/postJobProfile`);
    expect(req.request.method).toBe('POST');
    req.flush(null, mockError);
  });
});

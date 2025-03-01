import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TermsAndConditionComponent } from './terms-and-condition.component';
import { FooterComponent } from '../footer/footer.component';

describe('TermsAndConditionComponent', () => {
  let component: TermsAndConditionComponent;
  let fixture: ComponentFixture<TermsAndConditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsAndConditionComponent,FooterComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(TermsAndConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

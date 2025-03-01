import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CoreDevelopmentCoursesComponent } from './components/core-development-courses/core-development-courses.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EnquireFormComponent } from './components/enquire-form/enquire-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NextGenCoursesComponent } from './components/next-gen-courses/next-gen-courses.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TopTechCoursesComponent } from './components/top-tech-courses/top-tech-courses.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { InternshipComponent } from './components/internship/internship.component';
import { StackCoursesComponent } from './components/stack-courses/stack-courses.component';
import { InternshipBookingComponent } from './components/internship-booking/internship-booking.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CareerComponent } from './components/career/career.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './components/refund-policy/refund-policy.component';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// declare module 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    CoreDevelopmentCoursesComponent,
    CoursesComponent,
    EnquireFormComponent,
    FooterComponent,
    HomepageComponent,
    NavbarComponent,
    NextGenCoursesComponent,
    PopularCoursesComponent,
    ProjectsComponent,
    TopTechCoursesComponent,
    InternshipComponent,
    StackCoursesComponent,
    InternshipBookingComponent,
    TermsAndConditionComponent,
    JobsComponent,
    CareerComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

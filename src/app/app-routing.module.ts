import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoreDevelopmentCoursesComponent } from './components/core-development-courses/core-development-courses.component';
import { TopTechCoursesComponent } from './components/top-tech-courses/top-tech-courses.component';
import { NextGenCoursesComponent } from './components/next-gen-courses/next-gen-courses.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { EnquireFormComponent } from './components/enquire-form/enquire-form.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InternshipComponent } from './components/internship/internship.component';
import { StackCoursesComponent } from './components/stack-courses/stack-courses.component';
import { InternshipBookingComponent } from './components/internship-booking/internship-booking.component';
import { TermsAndConditionComponent } from './components/terms-and-condition/terms-and-condition.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CareerComponent } from './components/career/career.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './components/refund-policy/refund-policy.component';

const routes: Routes = [
  {
    path:"",
    component:HomepageComponent,
    title:"STACK QUEUE EDUCATION | SALEM"
  },
  {
    path:'course',
    component:CoursesComponent,
    title:"courses",
    children:[
      {
        path:"",
        pathMatch:'full',
        redirectTo:"core-development-courses"
      },
      {
        path:"core-development-courses",
        component:CoreDevelopmentCoursesComponent,
        title:"Core Development Courses"
      },
      {
        path:"top-tech-courses",
        component:TopTechCoursesComponent,
        title:"Top Tech Courses"
      },
      {
        path:"next-gen-courses",
        component:NextGenCoursesComponent,
        title:"Next Gen Courses"
      },
      {
        path:"popular-courses",
        component:PopularCoursesComponent,
        title:"Popular Courses"
      },
      {
        path: "stack-courses",
        component: StackCoursesComponent,
        title: "Stack Courses"
      }

    ]
  },
  {
    path:'enquire_form',
    component:EnquireFormComponent,
    title:"Enquire Form"
  },
  {
    path:"about_us",
    component:AboutusComponent
  },
  {
    path:"contact_us",
    component:ContactusComponent
  },
  {
    path:"projects",
    component:ProjectsComponent
  },
  {
    path: "internships",
    component:InternshipComponent
  },
  {
    path: "internshipBooking",
    component:InternshipBookingComponent,
    title:"Internship Booking"
  },
  {
    path: "termsAndConditions",
    component: TermsAndConditionComponent,
    title: "Terms and Conditions"
  },
  {
    path: "privacyPolicy",
    component: PrivacyPolicyComponent,
    title: "Privacy Policy"
  },
  {
    path: "refundPolicy",
    component: RefundPolicyComponent,
    title: "Refund Policy"
  },
  {
    path: 'jobs',
    component: JobsComponent,
    title:"Jobs"
    
  },
  {
    path: "career",
    component: CareerComponent,
    title: "Career"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

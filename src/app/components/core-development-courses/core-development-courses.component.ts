import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllCoursesService } from 'src/app/services/all-courses.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-core-development-courses',
  templateUrl: './core-development-courses.component.html',
  styleUrls: ['./core-development-courses.component.css']
})
export class CoreDevelopmentCoursesComponent implements OnInit {
  getCourses: any;
  loader: boolean = true;
  skeletons: number[] = Array(6).fill(0); // Add this line

  constructor(private readonly courses: AllCoursesService, private readonly route: Router) {
    courses.getAllCourse().subscribe((get) => {
      
      this.getCourses = get[0].career_based_courses;
      this.loader = false;
    });
  }
  ngOnInit() {
    AOS.init();
  }

  courseClick(course: any) {
    sessionStorage.setItem('selectCourse', JSON.stringify(course));
    sessionStorage.setItem('course_name', course.course_name);
    this.route.navigate(['/enquire_form']);
  }

}


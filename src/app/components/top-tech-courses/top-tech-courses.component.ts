import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllCoursesService } from 'src/app/services/all-courses.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-top-tech-courses',
  templateUrl: './top-tech-courses.component.html',
  styleUrls: ['./top-tech-courses.component.css']
})
export class TopTechCoursesComponent implements OnInit {
  getAllCourse: any;
  loader: boolean = true;
  skeletons: number[] = Array(6).fill(0); // Add this line

  constructor(private allCourses: AllCoursesService, private route: Router) {
    allCourses.getAllCourse().subscribe((get) => {
      console.log(get);
      this.loader = false;
      this.getAllCourse = get[1].trending_courses;
    });
  }

  ngOnInit(): void {
    AOS.init();
  }

  courseClick(course: any) {
    sessionStorage.setItem('selectCourse', JSON.stringify(course));
    sessionStorage.setItem('course_name', course.course_name);
    this.route.navigate(['/enquire_form']);
  }
}

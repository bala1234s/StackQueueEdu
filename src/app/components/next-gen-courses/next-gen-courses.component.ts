import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllCoursesService } from 'src/app/services/all-courses.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-next-gen-courses',
  templateUrl: './next-gen-courses.component.html',
  styleUrls: ['./next-gen-courses.component.css']
})
export class NextGenCoursesComponent implements OnInit {
  getCourses: any;
  loader: boolean = true;
  skeletons: number[] = Array(6).fill(0); // Add this line

  constructor(private courses: AllCoursesService, private route: Router) {
    courses.getAllCourse().subscribe((get) => {
     
      this.getCourses = get[2].next_gen_courses;
      this.loader = false;
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllCoursesService } from 'src/app/services/all-courses.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-stack-courses',
  templateUrl: './stack-courses.component.html',
  styleUrls: ['./stack-courses.component.css']
})
export class StackCoursesComponent implements OnInit {
  getCourses: any;
  loader: boolean = true;
  skeletons: number[] = Array(6).fill(0); // Add this line

  constructor(private courses: AllCoursesService, private route: Router) {
    courses.getAllCourse().subscribe((get) => {
     
      
      // console.log(get[0].career_based_courses);
      // console.log(get[0].courses[0].career_based_courses);
      this.getCourses= get[3].stack_courses;
      this.loader=false;

    })

  }

  ngOnInit(): void {
    AOS.init();
  }
  courseClick(course:any){
    // console.log(course);
    sessionStorage.setItem('selectCourse',JSON.stringify(course));
    sessionStorage.setItem('course_name',course.course_name);
    this.route.navigate(['/enquire_form']);

  }

}

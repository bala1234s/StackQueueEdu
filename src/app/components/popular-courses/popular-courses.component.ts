import { Component } from '@angular/core';
import { AllCoursesService } from 'src/app/services/all-courses.service';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent {
 getCourses:any;
  constructor(private courses:AllCoursesService){
    courses.getAllCourse().subscribe((get)=>{
      this.getCourses = get[0].courses[3].stack_courses;
    })

  }
}

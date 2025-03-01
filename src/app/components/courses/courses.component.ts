import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  categoriesOpen = false;

  toggleCategories() {
    this.categoriesOpen = !this.categoriesOpen;
  }
}

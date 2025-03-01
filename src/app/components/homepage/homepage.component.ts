import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { interval } from 'rxjs';

// declare var AOS: Aos;
import * as AOS from 'aos';
// import 'aos/dist/aos.css';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
 instituteservice:any[]=['Programming Course trainings','Internship trainings','Web Development projects','Career Development trainings'];
  currentTextindex:any=0;
  storecount:any;
  count:any=0;
  services:any='Programming Course trainings';
  contact:boolean=false;

  constructor(private route:Router){}

  // Slideshow using ngx-slick-carousel
  slides = [
    { img: "./assets/Angular logo.png"},
    { img: "./assets/thinking_image.png"},
    { img: "./assets/software-testing-removebg-preview.png"}
  ];

  slideConfig = {
    dots:true,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay":true,
    "autoplaySpeed":2500,
    "infinite":true,
    verticalSwiping:true,
    dotsClass:'changediv',
    vertical:true,
    pauseOnHover:false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  book(){
    this.route.navigateByUrl('/bookappointment');
  }

  ngOnInit(){
    AOS.init();
    const setint=interval(2000);
    setint.subscribe(val=>{
      this.currentTextindex=(this.currentTextindex+1) % this.instituteservice.length;
       this.storecount=this.count++;
       if(this.storecount>=this.instituteservice.length){
         this.storecount=0;
         this.count=0;
       }
       
       this.contact=!this.contact;
       this.services=this.instituteservice[this.storecount];
    })
  }
}

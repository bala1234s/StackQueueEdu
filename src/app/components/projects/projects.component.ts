import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { FooterComponent } from '../footer/footer.component'; // Adjust the path as necessary

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  titles:any;
  count:any=0;
  changeplacement:any=0;
  project:any;
  perpect:any;
  ball1:any;
  ball2:any;
  ball3:any;
  ball4:any;
  box1:any;
  box2:any;
  box3:any;
  box4:any;
  setHeight:any;
  setHeight2:any;
  setHeight3:any;
  placementTraining:any;
  placementChange:any;
  projects_titles:any[]=['Internships' , 'Placement training' , 'Projects' , 'Mentoring' , 'Career Development training' ];
  allPlacement:any[]=["../../assets/M.kumarasaamy.jpg","../../assets/M.kumarasaamy2.jpg","../../assets/JennysImg.jpg","../../assets/M.kumarasaamy4.jpg","../../assets/Jennysimg2.jpg","../../assets/M.kumarasaamy6.jpg"]
  @ViewChild('project-parallex') el!:ElementRef;
  @ViewChild('placementcard') el1!:ElementRef;

  date:any=new Date();
  day:any[]=["Sun","Mon","Tues","Wed","Thu","Fri","Sat"];
  month:any[]=["Jan","feb","Mar","Apr","may","jun","jul","aug","set","oct","Nov","Dec"];
  current:any[]=[];
  cdate:any;
  cday:any;
  cmonth:any;
  monthChange:any;
  daychange:any;
  i:any;
  cobject:any;
  constructor(){
    this.cday=this.date.getDay();
    for(this.i=0;this.i<7;this.i++)
      {
      this.cdate = this.date.getDate() + this.i;
      
        this.cmonth=this.date.getMonth()+this.i+1;
        this.cday=this.date.getDay()+this.i;
        if(this.cmonth>11){
          const exceedmonth=this.cmonth-12;
          this.monthChange=this.month[exceedmonth];
        }
        else{
          this.monthChange=this.month[this.cmonth];
        }
        // console.log(this.cday);
        if(this.cday>6){
          const exceedval=this.cday-this.day.length;
          this.daychange=this.day[exceedval];
        }
        else{
          this.daychange=this.day[this.cday];
        }
        let cobject={
          date:this.cdate,
          month:this.monthChange,
          day:this.daychange
        };

        if(this.current.length==0){
          this.current=[cobject];
        }
        else{
          this.current.push(cobject);
        }

        console.log(this.current);
      // const newDate=this.date.setDate(this.cmonth);
      // console.log(newDate);
      // console.log(this.day[this.cday+this.i]);

      // console.log(this.month[this.cmonth+this.i]);

    }

  setInterval(()=>{
    this.count=(this.count+1)%this.projects_titles.length;


  },1000);
  setInterval(()=>{

    this.changeplacement=(this.changeplacement+1)%this.allPlacement.length;
    // console.log(this.allPlacement[this.changeplacement]);

    this.el1.nativeElement.style.backgroundImage=`url(${this.allPlacement[this.changeplacement]})`;


  },1500);
}
  ngOnInit(): void {
    AOS.init();
  }
placementBack(){
  this.changeplacement=(this.changeplacement+1)%this.allPlacement.length;
  this.el1.nativeElement.style.backgroundImage=`url(${this.allPlacement[3]})`;


}

ngAfterViewInit(): void {


  window.addEventListener('scroll',()=>{


    // console.log(window.scrollY);

    if(window.scrollY>0){
      // console.log(window.scrollY);

      // scroll image start
      this.project=document.getElementById('demo');
      this.perpect=document.getElementById('demo1');
      this.project.style.transform=`rotateX(${0}deg)`;
      this.perpect.style.perpective=`${0}px`;
      this.project.style.transition='all 500ms ease-out';
      // scroll image end

      // scroll ball start
      this.box1=document.getElementById('collegeProject');
      this.box2=document.getElementById('studentProject');
      this.box3=document.getElementById('clientProject');
      this.box4=document.getElementById('requestProject');

    }
    else{
      this.project.style.transform=`rotateX(${45}deg)`;
      this.perpect.style.perpective=`${1000}px`;

    }


  })

}

}

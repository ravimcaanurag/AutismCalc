import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  childname!:string;
  Age!:string;
  Gender:string="";
  Examiner!:string;
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  proceed(){

  sessionStorage.setItem("childname",this.childname);
  sessionStorage.setItem("Age",this.Age);
  sessionStorage.setItem("Gender",this.Gender);
  sessionStorage.setItem("Examiner",this.Examiner);
  this.router.navigate(['checklevel']);

  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  constructor(private router:Router,private db: AngularFirestore) { }

  ngOnInit(): void {

  }

  proceed(){

  sessionStorage.setItem("childname",this.childname);
  sessionStorage.setItem("Age",this.Age);
  sessionStorage.setItem("Gender",this.Gender);
  sessionStorage.setItem("Examiner",this.Examiner);

  let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;

  this.db.collection("Visitors").doc(random.toString()).set(
    {
      name:this.childname,
      age:this.Age,
      examiner:this.Examiner,
      gender:this.Gender,
    }
    );




  this.router.navigate(['checklevel']);

  }
}

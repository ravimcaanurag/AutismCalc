import { Member } from './../question';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoggerService } from '../logger.service';

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
  constructor(private router:Router,private logger: LoggerService) { }

  ngOnInit(): void {

  }

  proceed(){

  sessionStorage.setItem("childname",this.childname);
  sessionStorage.setItem("Age",this.Age);
  sessionStorage.setItem("Gender",this.Gender);
  sessionStorage.setItem("Examiner",this.Examiner);

  var member=new Member();
  member.ChildName=this.childname;
  member.Age=this.Age;
  member.Examiner=this.Examiner;
  member.Gender=this.Gender;
  try{
  this.logger.addMember(member).subscribe((res)=>{
console.log('added')
  });
}
catch(ex){
console.log(ex)
}

  this.router.navigate(['checklevel']);

  }
}

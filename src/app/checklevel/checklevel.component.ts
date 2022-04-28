import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import {QuestionBank} from '../question'
import { ActivatedRoute, Route, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-checklevel',
  templateUrl: './checklevel.component.html',
  styleUrls: ['./checklevel.component.css']
})
export class ChecklevelComponent implements OnInit {

  constructor(private qservice:QuestionsService,private route:Router) { }

  qList!:QuestionBank;
  currentQuestion:number=0;
  noOfQuestions:number=0;
  isSelected:boolean=false;

  ngOnInit(): void {
this.qservice.getQuestions().subscribe((data)=>{
  this.qList=data;
  this.noOfQuestions=this.qList.Questions.length;
  this.qList.Name=sessionStorage.getItem("childname")!;
  this.qList.Age=sessionStorage.getItem("Age")!;
  this.qList.Gender=sessionStorage.getItem("Gender")!;
  this.qList.Examiner=sessionStorage.getItem("Examiner")!;

});

}

PreviousQ(){

  if(this.currentQuestion>0){
    this.currentQuestion=this.currentQuestion-1;
   // console.log(this.qList.Questions[this.currentQuestion].Options.filter(t=>t.IsSelected>0))
    if(this.qList.Questions[this.currentQuestion].Options.filter(t=>t.IsSelected>0).length>0)
    this.isSelected=true;
  }

}
getSelected(){
  this.isSelected=true;
}
NextQ(){
  if(this.currentQuestion<this.qList.Questions.length-1){
    this.currentQuestion=this.currentQuestion+1;
    if(this.qList.Questions[this.currentQuestion].Options.filter(t=>t.IsSelected>0).length>0)
    this.isSelected=true;
    else
    this.isSelected=false;
  }
}

calculate(){
  localStorage.setItem("rept", JSON.stringify(this.qList));
  //console.log(this.qList);
  this.route.navigate(["report"]);

}

}

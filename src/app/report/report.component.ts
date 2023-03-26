import { LoggerService } from './../logger.service';
import { Member, QReport, QuestionMdl } from './../question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import html2canvas from 'html2canvas';
//import jsPDF from 'jspdf';
//import autoTable from 'jspdf-autotable';
//import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { QuestionBank } from '../question';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private route:Router,private db: LoggerService ) { }

   level!:string;
   Percent!:string;
   name!:string;
   qList!:QuestionBank;
   total:number=0;
   qReport:QReport[]=[];


  ngOnInit(): void {

    if(localStorage.getItem("rept")!=null){
    this.qList=JSON.parse(localStorage.getItem("rept")!)

    for(let ques of this.qList.Questions){
         let reptObj:QReport=new QReport();
         reptObj.Question=ques.Question;
      for(let opt of ques.Options){
        this.total=this.total+Number(opt.IsSelected);
        if(opt.IsSelected>0){
          reptObj.Answer=opt.Option;
          reptObj.Score=opt.IsSelected;
        }
      }
      //console.log(reptObj);
      this.qReport.push(reptObj);
    }

      if(this.total>153)
      this.level="Severe Autism";
      else if(this.total<=153 && this.total>=107)
      this.level="Moderate Autism";
      else if(this.total<=106 && this.total>=70)
      this.level="Mild Autism";
      else if(this.total<70)
      this.level="Normal";


      if(this.total==70)
      this.Percent="40";
      else if(this.total>=71 && this.total<=88)
      this.Percent="50";
      else if(this.total>=89 && this.total<=105)
      this.Percent="60";
      else if(this.total>=106 && this.total<=123)
      this.Percent="70";
      else if(this.total>=124 && this.total<=140)
      this.Percent="80";
      else if(this.total>=141 && this.total<=158)
      this.Percent="90";
      else if(this.total>=158)
      this.Percent="100";
      else
      this.Percent="0";

      let random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      var member=new Member();
      member.ChildName=this.qList.Name;
      member.Age=this.qList.Age;
      member.DegreeOfAutism=this.level;
      member.Gender=this.qList.Gender
      member.Examiner=this.qList.Examiner;
      member.ISAAScore=this.total.toString();
      member.PercentageOfDisability=this.Percent
      this.db.addMember(member).subscribe((res)=>{
        console.log('added')
      })

      /*this.db.collection("Users").doc(this.qList.Name+"_"+this.qList.Examiner+"_"+random.toString()).set(
        {
          ChildName:this.qList.Name,
          Age:this.qList.Age,
          AutismLevel:this.level,
          Examiner:this.qList.Examiner,
          Gender:this.qList.Examiner,
          Score:this.total,
          Percent:this.Percent
        }
        );*/

    //console.log(this.qList);
    }

  }
  download(){

    var doc = new jspdf.jsPDF('p', 'pt', 'letter');
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    let specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element:any, renderer:any) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    let margins = {
        top: 150,
        bottom: 60,
        left: 40,
        right: 40,
        width: 600
    };
    var y = 20;
    doc.setLineWidth(2);
   // doc.text(200, y = y + 30, "TOTAL MARKS OF STUDENTS");
    doc.text('Autism Report', 11, 8);

    (doc as any).autoTable({
      html: '#simple_table',
      startY: 60,
      styles: {
        fontSize: 10,
        cellWidth: 'wrap'
      },
      columnStyles: {
        1: {columnWidth: 'auto'}
      }
    });


   /* (doc as any).autoTable({
        html: '#simple_table',
        startY: 70,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 180,
            },
            1: {
                cellWidth: 180,
            },
            2: {
                cellWidth: 180,
            }
        },
        styles: {
            minCellHeight: 40
        }
    })*/
    doc.save("rept.pdf");

      }

}

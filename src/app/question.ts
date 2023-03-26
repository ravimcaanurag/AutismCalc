
export class QuestionMdl {

  Qno!: number;
  Category!:string;
  Question!:string;
  Description!:string;
  Options!:OptionMdl[];
}

export class OptionMdl{
  OptionId!:number;
  Option!:string;
  Score!:number;
  Percent!:string;
  IsSelected!:number
}

export class QuestionBank{

  Name!:string;
  Gender!:string;
  Age!:string;
  Examiner!:string;
  Questions!:QuestionMdl[];

}
export class QReport{

  Question!:string;
  Answer!:string;
  Score!:number;

}

export class Member{
  ChildName!:string;
  Age!:string;
  Gender!:string;
  Examiner!:string;
  ISAAScore!:string;
  DegreeOfAutism!:string;
  PercentageOfDisability!:string;
}

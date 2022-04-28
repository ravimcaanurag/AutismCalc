import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ChecklevelComponent } from './checklevel/checklevel.component';
import { ReportComponent } from "./report/report.component"

const routes: Routes = [
  {path:"report",component:ReportComponent},
  {path:"checklevel",component:ChecklevelComponent},
  {path:"basic",component:BasicComponent},
  {path:'',redirectTo:'basic', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

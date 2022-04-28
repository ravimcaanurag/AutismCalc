import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklevelComponent } from './checklevel/checklevel.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './report/report.component';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    ChecklevelComponent,
    ReportComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

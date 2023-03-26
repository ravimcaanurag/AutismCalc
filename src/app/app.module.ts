import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklevelComponent } from './checklevel/checklevel.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './report/report.component';
import { BasicComponent } from './basic/basic.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from "../environments/environment";
import { LoggerService } from './logger.service';

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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule

  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

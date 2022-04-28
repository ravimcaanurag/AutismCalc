import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscriber } from 'rxjs';
import { QuestionBank } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }

  getQuestions():Observable<any>{

    return this.http.get("assets/Abook.json");

  }
}

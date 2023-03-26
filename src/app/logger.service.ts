import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from './question';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  remoteurl="http://autismapi.somee.com/api/Member/addMember";
  localurl="http://localhost:18767/api/Member/addMember";
  constructor(private http:HttpClient) { }

  public addMember=(member:Member)=>{
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': '*'
    })
  };

    return this.http.post(this.remoteurl,member,httpOptions)
  }
}

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Student} from './formdata';
import { HttpRequest, HttpResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class MyformserveService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':'application/json' })
  };
  configUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
  postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
  constructor(private http: HttpClient) {}

  getStudents() : Observable<HttpResponse<Student>> {
    return this.http.get<Student>(this.configUrl, { observe: 'response' });
  }

  postStudents(postData:Student) : Observable<Student> {
    const body=JSON.stringify(postData);
    return this.http.post<Student>(this.postUrl, body,this.httpOptions);
  }
}

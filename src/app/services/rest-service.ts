import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Credentials } from '../rest-classes/Credentials'
import { Achievement } from '../rest-classes/achievement';

@Injectable()
export class RestService {
    constructor(private http: HttpClient) { }

    // getUsers(): Observable<any> {
    //     return this.httpClient.get('http://jsonplaceholder.typicode.com/posts/1/comments');
    // }

    // getCommentByParameter(): Observable<any> {
    //     let params1 = new HttpParams().set('userId', '1');
    //     return this.httpClient.get('http://jsonplaceholder.typicode.com/posts', { params: params1 });
    // }

    register(cred: Credentials): Observable<any> {
        return this.http.post("http://localhost:8080/user/sign-up", cred);
    }

    login(cred: Credentials): Observable<any> {
        return this.http.post("http://localhost:8080/login", cred);
    }
    addAchievement(achievement: Achievement): Observable<any> {
        return this.http.post("http://localhost:8080/user/addAchievementItem", achievement,this.httpOptions);
    }

    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyaWNrMiIsImV4cCI6MTU2NjgxMjMyMH0.d_B0ILYxPaO2uVUNUp_uIpW_aCsmnX9TF8aGJbQWQPjFqu9KmoQBmv7T9THR8hqw4RLPOa__gNZWAq2_Qd5u7w'
        })
      };
}
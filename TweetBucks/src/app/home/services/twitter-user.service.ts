import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import { Timeline } from 'app/home/models/timeline';
import { User } from 'app/home/models/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { GlobalVariablesService } from 'app/shared/services/global-variables.service';
import { TwitterVariables } from './twitter-variables';

@Injectable()
export class TwitterUserService {
  private baseUrl: string;
  private authorizationHeader : string;
  constructor(private globalVariables: GlobalVariablesService, private http: Http) {
    this.authorizationHeader = "Bearer " + globalVariables.bearerToken;
    this.baseUrl = "http://localhost:3000/"
    //new TwitterVariables().usersUrl;
  }

  getTimeLine(userName: string): Observable<Timeline[]> {
      let query : string = "screen_name=" + userName + "&count=100";
      let endPoint : string = "user_timeline.json?";
      let headers : Headers = new Headers();
      this.createAuthorizationHeader(headers);
  
      headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    return this.http.post(this.baseUrl + 'timeline/', userName , {headers: headers})
               .map((response: Response) => <Timeline[]> response.json().data)
               .do(data => console.log('All: ' +  JSON.stringify(data)))
               .catch(this.handleError);;
           
//      return this.http.get(this.baseUrl + endPoint + query ,{headers : headers} )
  }

  private createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', 'Bearer ' +
      btoa(this.authorizationHeader)); 
  }


    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

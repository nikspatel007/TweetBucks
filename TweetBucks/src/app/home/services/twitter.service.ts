import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import { Timeline } from '../models/timeline';
import { TwitterUser } from '../models/twitter-user';
import { Tweet } from '../models/tweet';
import { twitterConfig } from './twitter.config';
import { Auth } from 'app/auth.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TwitterService {
  baseUrl : string;
  userId : string;
  constructor(private auth : Auth, private http : Http) { 
    this.userId = auth.userProfile.user_id;
    this.baseUrl = twitterConfig.baseUrl + this.userId + "/";
  }

  getFollowers(targetUserName : string) : Observable<TwitterUser[]>{
       let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = this.baseUrl + "followers/" + targetUserName;
        return this.http.get(url, options)            
                .map((res:Response)  => <TwitterUser[]>res.json().data.users)
                .catch(this.handleError);
  }
  
   getTweets(targetUserName : string) : Observable<Tweet[]>{
       let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = this.baseUrl + "timeline/" + targetUserName;
        return this.http.get(url, options)            
                .map((res:Response)  => <Tweet[]>res.json().data)
                .catch(this.handleError);
  }
  
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

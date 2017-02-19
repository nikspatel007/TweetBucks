import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  private baseUrl : string = "http://localhost:3000/";
  constructor(private http: Http ) { }

  authorize() : Observable<string>
  {
    var headers = new Headers();    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');    
    return this.http.post(this.baseUrl + 'authorize', {headers: headers})
             .map((response: Response) => 
             {
                return response.json().data;               
             })
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }
}

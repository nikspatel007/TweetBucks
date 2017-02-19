import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariablesService {

  constructor() {
    this.bearerToken = "Whatever";
   }  
  bearerToken : string;

}

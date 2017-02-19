import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import { LoginService} from './shared/services/login.service';
import { GlobalVariablesService} from './shared/services/global-variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  searchquery = '';
  tweetsdata;
  
  constructor(private loginService : LoginService, private globalVariables : GlobalVariablesService,
   private router : Router, private http: Http )
   {

   }

  searchcall(){
    var headers = new Headers();
    var searchterm = 'query=' + this.searchquery;
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/search', searchterm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
    });
  }
  
  usercall(){
    var headers = new Headers();
    var searchterm = 'screenname=Yasmin_Payne1';
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/user', searchterm, {headers: headers}).subscribe((res) => {
      console.log(res.json().data);
      
    });
  }

  followers(){
    var headers = new Headers();
    var searchterm = 'patelnik7';
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/followers', searchterm, {headers: headers}).subscribe((res) => {
      console.log(res.json().data);
      
    });
  }

  ngOnInit()
  {
    let respose : string;
    this.loginService.authorize().subscribe(res => 
    {
      if(res === undefined || res === null)
      {
        this.router.navigate(['login']);
      }
      else
      {
        this.globalVariables.bearerToken = res;
        this.followers();
        this.router.navigate(['/home']);
      }
    });    
  }
}
import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

 searchquery = '';
  tweetsdata;
  
  constructor(private http: Http , private router : Router){}
  
  login() {
    var headers = new Headers();
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    
    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
       this.router.navigate(['/home']);
    })
  }
  ngOnInit() {
  }
}

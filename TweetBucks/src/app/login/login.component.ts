import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';
import { LoginService } from 'app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

 searchquery = '';
  tweetsdata;
  
  constructor(private loginService : LoginService, private router : Router){}
  
  login() {
    this.loginService.authorize().subscribe(res => 
    {
      console.log(res);
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Auth }   from 'app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private auth : Auth) { }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Timeline } from './models/timeline';
import { TwitterUserService} from './services/twitter-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  timeline : Timeline[];
  constructor(private twitterUser : TwitterUserService) { }

  ngOnInit() {
    let userName :string = "patelnik7";
    this.twitterUser.getTimeLine(userName)
      .subscribe(res => {
        this.timeline = res
      });
  }

}

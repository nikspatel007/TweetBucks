import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../services/twitter.service';
import { Auth } from 'app/auth.service';
import { TwitterUser } from '../models/twitter-user';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-twitter-list',
  templateUrl: './twitter-list.component.html',
  styleUrls: ['./twitter-list.component.sass']
})
export class TwitterListComponent implements OnInit {
  tweets : Tweet[]
  constructor(private twitter : TwitterService, private auth : Auth ) { }

  ngOnInit() {
    let userName = this.auth.userProfile.screen_name;
    this.twitter.getTweets(userName)
    .subscribe(res => {
      this.tweets = res;
    });
  }

}

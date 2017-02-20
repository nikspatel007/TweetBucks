import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../services/twitter.service';
import { Auth } from 'app/auth.service';
import { TwitterUser } from '../models/twitter-user';

@Component({
  selector: 'app-twitter-followers',
  templateUrl: './twitter-followers.component.html',
  styleUrls: ['./twitter-followers.component.sass']
})
export class TwitterFollowersComponent implements OnInit {
  followers : TwitterUser[];
  constructor(private twitter : TwitterService, private auth : Auth) { }

  ngOnInit() {
    let userName = this.auth.userProfile.screen_name;
    this.twitter.getFollowers(userName)
    .subscribe(res => {
      this.followers = res;
    });
  }

}

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { TwitterService } from '../services/twitter.service';
import { Auth } from 'app/auth.service';
import { TwitterUser } from '../models/twitter-user';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-tweet-textbox',
  templateUrl: './tweet-textbox.component.html',
  styleUrls: ['./tweet-textbox.component.sass']
})
export class TweetTextboxComponent implements OnInit {

  tweet: string;
  isValid: boolean;
  constructor(private twitter: TwitterService, private auth: Auth, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  submit(): void {

  }

  ngOnInit() {
    this.tweet = '#blockChain pay $100 to @patelNik';
    this.isValid = false;
  }

  private parseTweet(): void {
    let value = this.tweet;
    const blockChain: string = "#blockChain";
    const dollarSign: string = "$";
    const mention: string = "@";

    if (value.indexOf(blockChain) >= 0 &&
      value.indexOf(dollarSign) >= 0 &&
      value.indexOf(mention) >= 0) {
      let pattern = /\B@[a-z0-9_-]+/gi;
      let mentions = value.match(pattern);
      let userName = this.auth.userProfile.screen_name;
      this.twitter.createTweet(value)
        .subscribe(res => {
          mentions.forEach(element => {
            console.log(element);
            this.toastr.info("Sending money to " + element, "Information");
          });
          console.log(res);
          this.isValid = true;
        });

      console.log("tweet is valid.");

    }
    else {
      this.isValid = false;
      console.log("tweet is invalid.");
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-textbox',
  templateUrl: './tweet-textbox.component.html',
  styleUrls: ['./tweet-textbox.component.sass']
})
export class TweetTextboxComponent implements OnInit {

  tweet :  string;
  constructor() { }

  submit() : void{

  }

  ngOnInit() {
    this.tweet = '#blockChain pay $100 to @patelNik';
  }

  private parseTweet() : void{
      let value = this.tweet;
      const blockChain : string = "#blockChain";
      const dollarSign : string = "$";
      const mention : string = "@";

      if(value.indexOf(blockChain) >=0 &&
         value.indexOf(dollarSign) >=0 &&
         value.indexOf(mention) >= 0)
         {
           let pattern = /\B@[a-z0-9_-]+/gi;
            let mentions = value.match(pattern);
            mentions.forEach(element => {
              console.log(element);
              //sendMoney to User.
            });
           console.log("tweet is valid.");
         }
       else{
          console.log("tweet is invalid.");         
       }   
  }

}

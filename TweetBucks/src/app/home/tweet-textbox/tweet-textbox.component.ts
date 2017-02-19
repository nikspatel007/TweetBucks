import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-textbox',
  templateUrl: './tweet-textbox.component.html',
  styleUrls: ['./tweet-textbox.component.sass']
})
export class TweetTextboxComponent implements OnInit {

  tweet :  string;
  isValid : boolean;
  constructor() {
   }

  submit() : void{

  }

  ngOnInit() {
    this.tweet = '#blockChain pay $100 to @patelNik';
    this.isValid = false;
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
            this.isValid = true;
           console.log("tweet is valid.");
                     
         }
       else{
         this.isValid = false;
          console.log("tweet is invalid.");         
       }   
  }

}

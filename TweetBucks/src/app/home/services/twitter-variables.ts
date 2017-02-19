export class TwitterVariables {
    baseUrl : string ;
    baseApiUrl : string;
    usersUrl : string;
    statusesUrl : string;
    followersUrl : string;

    constructor(){
        this.baseUrl = "https://api.twitter.com/";
        this.baseApiUrl = this.baseUrl + "1.1/";
        this.usersUrl = this.baseApiUrl + "users";
        this.statusesUrl = this.baseApiUrl + "statuses/";
        this.followersUrl = this.baseApiUrl + "followers/";
    }
}
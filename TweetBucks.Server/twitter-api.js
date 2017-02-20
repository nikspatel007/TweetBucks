var config = require('./config.js');
var auth0 = require('./auth0-api.js');
var twitter = require('twitter');
var request = require('request');

var createTwitter = function (userId) {
    // var identity = auth0.getTwitterAccessToken(userId);
    var client = new twitter({
        consumer_key: config.twitter.consumer_key,
        consumer_secret: config.twitter.consumer_secret,
        access_token_key: "709952466817851392-VNpSn9lDUxbxs3HRf9WtEVFkJiFQW9A",
        access_token_secret: "PGtwNHv7EJvez0WkJKllQgKuF1yvn8LcZDScnQBffILf0"
    });
    return client;
}

var followers = function (req, res) {
    var userId = req.params.userid;
    var client = createTwitter(userId);
    var screenName = req.params.screenname;
    //https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=twitterdev&skip_status=true&include_user_entities=false
    //List Of Followers
    client.get('followers/list.json?screen_name=' + screenName + '&count=200', function (error, followers, response) {
        if (error)
            res.status(500).send({
                error: error
            });
        else {
            res.writeHead(200, { "Content-Type": "application/json" });
            var json = JSON.stringify({
                success: true,
                data: followers
            });
            res.end(json);
        }
    });

}

var timeline = function (req, res) {
    var userId = req.params.userid;
    var client = createTwitter(userId);
    var screenName = req.params.screenname;
    //https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
    //List of Tweets.
    client.get('statuses/user_timeline.json?screen_name=' + screenName + "&count=200", function (error, tweets, response) {
        if (error)
            res.status(500).send({
                error: error
            });
        else {
            res.writeHead(200, { "Content-Type": "application/json" });
            var json = JSON.stringify({
                success: true,
                data: timeline
            });
            res.end(json);
        }
    });

    //https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=twitterapi&count=2
    //List of Tweets.
    // client.get('statuses/user_timeline.json?screen_name=' + screenName + "&count=200", function (error, tweets, response) {
    //     if (!error) {
    //         console.log("Your timeline's tweets : \n  " + tweets.length);
    //     }
    // });
}

var createTweet = function (req, res) {
    var userId = req.params.userid;
    var client = createTwitter(userId);
    var tweet = req.body;
    var encoded = encodeURIComponent(tweet);

    //Post Tweet.
    // var message = "Hello World, using Twitter Api.";
    // var  encoded = encodeURIComponent(message);
    client.post('statuses/update.json?status=' + encoded, function (error, tweet, response) {
        if (error)
            res.status(500).send({
                error: error
            });
        else {
            res.writeHead(200, { "Content-Type": "application/json" });
            var json = JSON.stringify({
                success: true,
                data: tweet
            });
            res.end(json);
        }
    });

}

var deleteTweet = function (req, res) {
    var userId = req.params.userid;
    var client = createTwitter(userId);
    var tweetId = req.params.tweetid;
    var encoded = encodeURIComponent(tweetId);

    //https://api.twitter.com/1.1/statuses/destroy/240854986559455234.json
    //Delete Tweet.
    // var tweetId = 0;
    client.post('statuses/destroy/' + tweetId + '.json', function (error, tweet, response) {
        if (error)
            res.status(500).send({
                error: error
            });
        else {
            res.writeHead(200, { "Content-Type": "application/json" });
            var json = JSON.stringify({
                success: true,
                data: tweet
            });
            res.end(json);
        }
    });
}

var functions = {
    followers: followers,
    timeline: timeline,
    createTweet: createTweet,
    deleteTweet: deleteTweet
}

module.exports = functions;
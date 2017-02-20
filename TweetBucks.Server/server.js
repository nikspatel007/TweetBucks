var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var functions = require('./functions');
var twitter = require('./twitter-api');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/:userid/followers/:screenname/', twitter.followers);
app.get('/:userid/timeline/:screenname/', twitter.timeline);
app.get('/:userid/tweet/destroy/:tweetid/', twitter.deleteTweet);
app.post('/:userid/tweet/create/', twitter.createTweet);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);
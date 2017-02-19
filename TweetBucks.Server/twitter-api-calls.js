var request = require('request');
var config = require('./config');
var twitterApi = require("node-twitter-api");

var twitter = new twitterApi({
    consumerKey: config.consumerKey,
    consumerSecret: config.consumerSecret,
    callback: config.callback
});
var appTokens = {

};

functions = {
    getRequestToken: function (req, res) {
        twitter.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
            if (error) {
                console.log("Error getting OAuth request token : " + error);
            } else {

            }
        });
    },
    
    authorize: function(req, res) {
        var header = config.consumerkey + ':' +config.consumersecret;
        var encheader = new Buffer(header).toString('base64');
        var finalheader = 'Basic ' + encheader;
        
        request.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'}, 
        headers: {Authorization: finalheader}}, function(error, response, body) {
            if(error)
            console.log(error);
            else {
                config.bearertoken = JSON.parse(body).access_token;
                
                res.json({success: true, data:config.bearertoken});
            }
            
        })
    },
    
};
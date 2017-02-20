var config = require('./config.js');
var request = require("request");

var getBearerToken = function () {
    var body = {
        client_id: config.auth0.client_id,
        client_secret: config.auth0.client_secret,
        audience: config.auth0.apiBaseUrl,
        grant_type: "client_credentials"
    }
    var options = {
        method: 'POST',
        url: config.auth0.domain + 'oauth/token',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    };

    request(options, function (error, response, body) {
        if (error) {
            throw new Error(error);
        }
        //console.log(body);
        return "Bearer " + JSON.parse(body).access_token;
    });

}
var getUserProfile = function (userId) {
    var bearerToken = getBearerToken();
    //encodeURIComponent('twitter|709952466817851392');
    var getOptions = {
        method: 'GET',
        url: config.auth0.apiBaseUrl + 'users/' + encodeURIComponent(userId),
        headers: {
            authorization: bearerToken
        }
    };

    request(getOptions, function (error, response, body) {
        if (error) {
            console.log("Error in getting user.")
            throw new Error(error);
        }
        var userProfile = JSON.parse(body);
        //Update this to filter for Auth Provider. In this is case it is default to Twitter.
        return obuserProfilej;
    });
}

var getTwitterAccessToken = function (userId) {

    var userProfile = this.getUserProfile(userId);
    console.log(userProfile);
    var identity = userProfile.identities[0];
    return {
        access_token_key: identity.access_token,
        access_token_secret: identity.access_token_secret
    }

}

functions = {
    getBearerToken: getBearerToken,
    getTwitterAccessToken: getTwitterAccessToken,
    getUserProfile : getUserProfile
}
module.exports = functions;
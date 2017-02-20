var auth0 = {
    domain : 'https://nikspatel007.auth0.com/',
    apiBaseUrl : 'https://nikspatel007.auth0.com/api/v2/',
    client_id: 'baLfDJ9WJQtHyD2J7xXWzxge2jAE63MP',
    consumersecret: 'FOklRu0JradM_GSVVytQCzbVUmSmwyLMSidmsavXBAPTiBeOj4dgB92kGRGa7vRS',
};

var twitter = {
  apiBaseUrl : 'https://api.twitter.com/1.1/',
  consumer_key: 'RGCRMUFKTdhIK2NQ17rnuZMyy',
  consumer_secret: 'ynHRfKDQY2GonB5ktSKcw2DyBx37C9TSPdqmUsduWIiKp5kJkM'
}

var appSettings = {
    auth0 : auth0,
    twitter : twitter
}
module.exports = appSettings;
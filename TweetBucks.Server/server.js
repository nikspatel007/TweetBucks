var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var functions = require('./functions');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.post('/authorize', functions.authorize);
app.post('/search', functions.search);
app.post('/followers', functions.followers);
app.post('/timeline', functions.timeline);
app.post('/user', functions.user);

app.listen(3000);
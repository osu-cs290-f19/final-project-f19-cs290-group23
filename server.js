var fs = require('fs');
var path = require('path');
var express = require('express');
var express_handlebars = require('express-handlebars'); 
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', express_handlebars({defaultLayout: 'skeleton'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

var posts = require('./posts.json');

app.get('/', function (req, res, next) {
    res.render('posts', {posts : posts});
    res.status(200);
});

app.get('*', function (req, res) {
    res.render('partials/404');
    res.status(404);
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var express_handlebars = require('express-handlebars'); 
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', express_handlebars({defaultLayout: 'skeleton'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.json());

var posts = require('./posts.json');
var views = fs.readdirSync('./views');

for(var i = 0; i < views.length; i++) {
    if (views[i].includes("handlebars")) {
        views[i] = views[i].substring(0, views[i].length-11);
    };
}

app.get('/', function (req, res, next) {
    res.render('posts', {posts : posts});
    res.status(200);
});

app.get('/:url', function (req, res, next) {
    for(var i = 0; i < views.length; i++) {
        if (views[i] == req.params.url) {
            res.render(req.params.url);
            res.status(200);
            return;
        }
    }
    next();
})

app.get('*', function (req, res) {
    res.render('partials/404');
    res.status(404);
});

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});

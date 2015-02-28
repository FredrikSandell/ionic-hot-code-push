var express = require('express');
var app = express();
//var exphbs = require('express-handlebars');
//app.engine('.hbs', exphbs({extname: '.hbs'}));
//app.set('view engine', '.hbs');


if(process.argv.length<3) {
    console.log('the version to use must be specified as either "1" or "2"');
    return;
}
var version = process.argv[2];
var appVersion = undefined;
if(version === "2") {
    appVersion = 2;
} else if(version === "1") {
    appVersion = 1;
} else {
    console.log('version argument ("'+version+'") must be either "1" or "2"');
    return;
}
/*
if(version == 1) {
    app.set('views', __dirname + '/public/views');
} else {
    app.set('views', __dirname + '/public_v2/views');
}

app.get('/isReachable', function(req, res){
    res.send('yes');
});

app.get('/app', function (req, res, next) {
    var pathToCordova = '';
    if(typeof req.query.platform !== undefined) {
        console.log("Platform parameter is: " + req.query.platform);
        if(req.query.platform == 'android') {
            pathToCordova = 'js/android_cordova/cordova.js';
        } else if(req.query.platform == 'ios'){
            pathToCordova = 'js/ios_cordova/cordova.js';
        }
    }
    console.log('Path to Cordova: '+pathToCordova);
    res.render('index',   {
            pathToCordova: pathToCordova
        }
    );
});*/

if(version === "2") {
    app.use(express.static(__dirname + '/public_v2'));
} else if(version === "1") {
    app.use(express.static(__dirname + '/public'));
} else {
    console.log('version argument ("'+version+'") must be either "1" or "2"');
    return;
}

app.listen(process.env.PORT || 9000);




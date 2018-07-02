var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'developmentSessionSecret'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.html', require('ejs').__express);
app.set('views', './public');
app.set('view engine', 'html');

require('./routes/routeApi.js')(app);
require('./routes/routePage.js')(app);

module.exports = app;
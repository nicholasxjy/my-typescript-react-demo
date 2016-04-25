"use strict";
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var webpack_config_1 = require('./webpack.config');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));
if (app.get('env') === 'development') {
    var compiler = webpack(webpack_config_1["default"]);
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpack_config_1["default"].output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}
app.use('*', function (req, res, next) {
    res.render('index', {
        title: 'React Demo'
    });
});
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
exports.__esModule = true;
exports["default"] = app;

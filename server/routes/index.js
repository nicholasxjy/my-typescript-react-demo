"use strict";
var express = require('express');
var router = express.Router();
router.get('*', function (req, res, next) {
    res.render('index', {
        title: 'express'
    });
});
exports.__esModule = true;
exports["default"] = router;

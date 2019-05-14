'use strict';
var Client = require('node-rest-client').Client;
var client = new Client();

//http://localhost:3003/sync?two=c23&three=c31&sel=5
exports.sync = function (req, res) {
    console.log(req.query.two);
    console.log(req.query.three);
    console.log(req.query.sel);
    // res.status(200).send('pingpong');
    client.get("http://localhost:3002/to?two=" + req.query.two + '&sel=' + req.query.sel + '&three=' + req.query.three, function (data, response) {
        res.status(200).send('pingpong');
    });
};

http://localhost:3003/sync?two=c21&three=c31&sel=5
exports.one = function (req, res) {
    console.log(req.query.two);
    console.log(req.query.three);
    console.log(req.query.sel);
    // res.status(200).send('pingpong');
    client.get("http://localhost:3002/to?two=" + req.query.two + '&sel=' + req.query.sel + '&three=' + req.query.three, function (data, response) {
        res.status(200).send('pingpong');
    });
};

http://localhost:3003/sync?two=c22&three=c31&sel=5
exports.two = function (req, res) {
    console.log(req.query.two);
    console.log(req.query.three);
    console.log(req.query.sel);
    // res.status(200).send('pingpong');
    client.get("http://localhost:3002/to?two=" + req.query.two + '&sel=' + req.query.sel + '&three=' + req.query.three, function (data, response) {
        res.status(200).send('pingpong');
    });
};

//http://localhost:3003/three?two=c23&three=c31&lang=2&verse=3
exports.three = function (req, res) {
    console.log(req.query.two);
    console.log(req.query.three);
    console.log(req.query.lang);
    console.log(req.query.verse);    
    client.get("http://localhost:3002/three?two=" + req.query.two + '&lang=' + req.query.lang + '&verse=' + req.query.verse, function (data, response) {
        res.status(200).send('pingpong');
    });
};

//http://localhost:3003/four?two=c24
exports.four = function (req, res) {
    console.log(req.query.two);
    // res.status(200).send('pingpong');
    client.get("http://localhost:3002/four?two=" + req.query.two, function (data, response) {
        res.status(200).send('pingpong');
    });
};

//http://localhost:3003/five?two=c25
exports.five = function (req, res) {
    console.log(req.query.two);
    console.log(req.query.sel);
    client.get("http://localhost:3002/five?two=" + req.query.two + '&sel=' + req.query.sel, function (data, response) {
        res.status(200).send('pingpong');
    });
};

//http://localhost:3003/six?two=c26
exports.six = function (req, res) {
    console.log(req.query.two);
    client.get("http://localhost:3002/six?two=" + req.query.two , function (data, response) {
        res.status(200).send('pingpong');
    });
};





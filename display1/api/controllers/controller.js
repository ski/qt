'use strict';
var Client = require('node-rest-client').Client;
var client = new Client();
var displaythree = new Client();

//http://localhost:3003/sync?two=c21&three=c31&sel=5
//http://localhost:3005/sync?three=c31&&sel=5
exports.sync = function (req, res) {
    client.get("http://192.168.1.165:3002/to?two=" + req.query.two + '&sel=' + req.query.sel, function (data, response) {});
    client.get("http://192.168.1.157:3005/to?three=" + req.query.three + '&sel=' + req.query.sel, function (data, response) {});
    res.status(200);
};

http://localhost:3003/sync?two=c21&three=c31&sel=5
exports.one = function (req, res) {
    client.get("http://192.168.1.165:3002/to?two=" + req.query.two + '&sel=' + req.query.sel + '&three=' + req.query.three, function (data, response) {});
    res.status(200).send();
};

//languages
//http://192.168.0.72:3002/sync?two=c22&three=c31&sel=4
exports.two = function (req, res) {
    client.get("http://192.168.1.165:3002/to?two=" + req.query.two + '&lang=' + req.query.lang + '&verse=' + req.query.verse, function (data, response) {});    
    //client.get('http://localhost:3005/to?three=' + req.query.three +'&sel=' + req.query.sel);
    res.status(200).send();
};

//verses
//http://localhost:3003/three?two=c23&lang=2&verse=3
exports.three = function (req, res) {
    console.log(req.query.two);
    console.log(req.query.lang);
    console.log(req.query.verse);
    client.get("http://192.168.1.165:3002/three?two=" + req.query.two + '&lang=' + req.query.lang + '&verse=' + req.query.verse, function (data, response) {});
    client.get("http://192.168.1.157:3005/three?three=" + req.query.three + '&elang=' + req.query.lang + '&everse=' + req.query.verse , function (data, response) {});
    res.status(200).send();
};

//fonts
//http://localhost:3003/three?two=c23&three=c36&lang=3&verse=4&sel=4
exports.four = function (req, res) {
    console.log(req.query.lang);
    console.log(req.query.sel);
    console.log(req.query.font);
    client.get("http://192.168.1.165:3002/four?two=" + req.query.two + '&sel=' + req.query.sel, function (data, response) {});
    client.get("http://192.168.1.157:3005/four?three=" + req.query.three + '&lang=' + req.query.lang + '&sel=' + req.query.sel + '&font=' + req.query.font , function (data, response) {});
    res.status(200).send();
};

//frames
//http://localhost:3003/three?two=c23&three=c36&lang=3&verse=4
exports.five = function (req, res) {
    client.get("http://localhost:3002/five?two=" + req.query.two + '&sel=' + req.query.sel, function (data, response) {
        res.status(200).send('pingpong');
    });
};

//review
//http://localhost:3003/six?two=c26
exports.six = function (req, res) {
    console.log(req.query.two);
    client.get("http://localhost:3002/six?two=" + req.query.two , function (data, response) {
        res.status(200).send('pingpong');
    });
};





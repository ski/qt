'use strict';
var Client = require('node-rest-client').Client;
var client = new Client();

var d2 = "http://192.168.1.127:3002";
var d3 = "http://192.168.1.137:3005";


// var d2 = "http://localhost:3002";
// var d3 = "http://localhost:3005";

//http://localhost:3003/sync?two=c21&three=c31&sel=5
//http://localhost:3005/sync?three=c31&&sel=5
exports.sync = function (req, res) {
    console.log(req.query);
    client.get(d2 + '/to?two=' + req.query.two + '&sel=' + req.query.sel, function (data, response) {});
    client.get(d3 + '/to?three=' + req.query.three + '&sel=' + req.query.sel, function (data, response) {});
    res.status(200).send();
};

http://localhost:3003/sync?two=c21&three=c31&sel=5
exports.one = function (req, res) {
    console.log(req.query);
    client.get(d2 + '/to?two=' + req.query.two + '&sel=' + req.query.sel + '&three=' + req.query.three, function (data, response) {});
    res.status(200).send(); 
};

//languages
//http://192.168.0.72:3002/sync?two=c22&three=c31&sel=4
exports.two = function (req, res) {
    console.log(req.query);
    client.get(d2 + '/to?two=' + req.query.two + '&lang=' + req.query.lang + '&verse=' + req.query.verse, function (data, response) {});    
    res.status(200).send();
};

//verses
//http://localhost:3003/three?two=c23&lang=2&verse=3
exports.three = function (req, res) {
    console.log(req.query);
    client.get(d2 + '/three?two=' + req.query.two + '&lang=' + req.query.lang + '&verse=' + req.query.verse, function (data, response) {});
    client.get(d3 + '/three?three=' + req.query.three + '&elang=' + req.query.lang + '&everse=' + req.query.verse , function (data, response) {});
    res.status(200).send();
};

//fonts
//http://localhost:3003/three?two=c23&three=c36&lang=3&verse=4&sel=4
exports.four = function (req, res) {
    console.log(req.query);
    client.get(d2 + '/four?two=' + req.query.two + '&sel=' + req.query.sel, function (data, response) {});
    client.get(d3 + '/four?three=' + req.query.three + '&lang=' + req.query.lang + '&sel=' + req.query.sel + '&font=' + req.query.font , function (data, response) {});
    res.status(200).send();
};

//frames
//curl "http://localhost:3002/five?two=c25&sel=0&frame=0&verse=0&lang=0"
//http://192.168.0.12:3003/five?two=c25&three=c35&sel=0&font=0&lang=0&verse=0

exports.five = function (req, res) {
    console.log(req.query);
    var query = d3 + '/five?three=' + req.query.three 
        + '&elang=' + req.query.lang 
        + '&efont=' + req.query.font 
        + '&eframe=' + req.query.sel
        + '&everse=' + req.query.verse;
    client.get(query, function (data, response) {});
    query = d2 + '/five?two=' + req.query.two 
        + '&sel=' + req.query.lang;
    client.get(query, function (data, response) {});
    res.status(200).send();
};

//review
//http://localhost:3003/six?two=c26
exports.six = function (req, res) {
    console.log(req.query);
    var query = d2 + '/six?two=' + req.query.two;    
    client.get(query, function (data, response) {});
    query = d3 + '/five?three=' + req.query.three 
        + '&elang=' + req.query.lang 
        + '&efont=' + req.query.font 
        + '&eframe=' + req.query.sel
        + '&everse=' + req.query.verse;
    client.get(query , function (data, response) {});
    res.status(200).send();
};





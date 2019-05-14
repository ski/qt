'use strict';
var Client = require('node-rest-client').Client;
var client = new Client();

exports.sync = function (req, res) {
    console.log(req.query.two);
    console.log(req.query.three);
    console.log(req.query.sel);
    // res.status(200).send('pingpong');
    client.get("http://localhost:3002/to?two=" + req.query.two + '&sel=' + req.query.sel + '&three=' + req.query.three, function (data, response) {
        res.status(200).send('pingpong');
    });
    
};
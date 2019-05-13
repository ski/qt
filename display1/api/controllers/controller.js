'use strict';
var Client = require('node-rest-client').Client;
var client = new Client();

exports.sync = function (req, res) {
    console.log(req.query.two);
    console.log(req.query.three);
    // res.status(200).send('pingpong');
    client.get("http://localhost:3002/to?two=" + req.query.two, function (data, response) {
        res.status(200).send('pingpong');
    });
    
};
var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let payload;
let two;
let sel;
let msg;
let event;

app.get('/to', (req, res) => {
    res.status(200).send();
    payload = true;    
    event = 'to';
    msg = {dtwo : req.query.two, esel : req.query.sel};
});

app.get('/three', (req, res) => {
    res.status(200).send();
    payload = true;   
    event = 'three';
    msg = {dtwo : req.query.two, elang : req.query.lang, everse : req.query.verse};
});

app.get('/four', (req, res) => {
    res.status(200).send();
    payload = true;   
    event = 'four';
    msg = {dtwo : req.query.two, esel : req.query.sel};
});

app.get('/five', (req, res) => {
    res.status(200).send();
    payload = true;    
    event = 'five';
    msg = {dtwo : req.query.two, esel : req.query.sel};
});

app.get('/six', (req, res) => {
    res.status(200).send();
    payload = true;    
    event = 'six';
    msg = {dtwo : req.query.two};
});

const update = async socket => {
    try {
        if (payload) {
            io.emit(event, msg); // Emitting a new message. It will be consumed by the client
            payload = false;
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

let interval;
io.on('connection', s => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => update(s), 1);
    io.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

http.listen(3002, () => console.error('listening on http://localhost:3002/'));
console.error('display2 server started');
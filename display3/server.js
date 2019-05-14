var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let payload;
let dthree;
let sel;
let msg;
let event;

//sudo npm install -g create-react-app
//sudo npm install -g yarn
//sudo apt install git
app.get('/to', (req, res) => {
    res.status(200).send('pingpong');
    payload = true;    
    event = 'to';
    msg = {dthree : req.query.three, esel : req.query.sel};
    console.log(msg);
});

app.get('/three', (req, res) => {
    console.log(req.query.elang);
    console.log(req.query.everse);
    res.status(200).send('pingpong');
    payload = true;   
    event = 'three';
    msg = {dthree : req.query.three, elang : req.query.elang, everse : req.query.everse};
});

app.get('/four', (req, res) => {
    res.status(200).send('pingpong');
    payload = true;   
    event = 'four';
    msg = {dtwo : req.query.two, esel : req.query.sel};
});

app.get('/five', (req, res) => {
    res.status(200).send('pingpong');
    payload = true;    
    event = 'five';
    msg = {dtwo : req.query.two, esel : req.query.sel};
});

app.get('/six', (req, res) => {
    res.status(200).send('pingpong');
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

http.listen(3005, () => console.error('listening on http://localhost:3005/'));
console.error('display3 server started');
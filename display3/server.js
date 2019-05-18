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
    console.log(req.query);
    res.status(200).send();
    payload = true;    
    event = 'to';
    msg = {dthree : req.query.three, esel : req.query.sel};
    console.log(msg);
});

app.get('/three', (req, res) => {
    console.log(req.query);
    res.status(200).send();
    payload = true;   
    event = 'three';
    msg = {dthree : req.query.three, elang : req.query.elang, everse : req.query.everse};
});

app.get('/four', (req, res) => {
    console.log(req.query);
    res.status(200).send();
    payload = true;   
    event = 'four';
    msg = {dthree : req.query.three, esel : req.query.sel, elang: req.query.lang, everse: req.query.font };
});

app.get('/five', (req, res) => {
    console.log(req.query);
    console.log('5');
    res.status(200).send();
    payload = true;    
    event = 'five';
    msg = {dthree : req.query.three, elang: req.query.elang, everse: req.query.everse, efont: req.query.efont, eframe: req.query.eframe};
});

app.get('/six', (req, res) => {
    console.log(req.query);
    res.status(200).send();
    payload = true;    
    event = 'six';
    msg = {dthree : req.query.two};
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
var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let payload;
let two;
let sel;
app.get('/to', (req, res) => {
    console.log(req.query.two);
    console.log(req.query.sel);
    res.status(200).send('pingpong');
    payload = true;
    two = req.query.two
    if(req.query.sel){
        sel = req.query.sel;
    }
});

const update = async socket => {
    try {
        if (payload) {
            var random = Math.random() * (100 - 1) + 1
            var msg = {dtwo : two, esel : sel};
            io.emit("to", msg); // Emitting a new message. It will be consumed by the client
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
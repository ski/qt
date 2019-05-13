const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server); // < Interesting!

const axios = require("axios");

const getApiAndEmit = async socket => {
    try {
        // const res = await axios.get(
        //     "https://api.darksky.net/forecast/307030146102fbd00ce750c1aa2908a2/43.7695,11.2558"
        // ); // Getting the data from DarkSky
        var random = Math.random() * (100 - 1) + 1
        socket.emit("FromAPI", random); // Emitting a new message. It will be consumed by the client
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};


let interval;
io.on("connection", socket => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
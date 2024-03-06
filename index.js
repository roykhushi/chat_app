const express = require('express');
const http = require('http');
const path = require("path");
const { Server } = require("socket.io");


const port = 9000;
const app = express();
const server = http.createServer(app);

//sockets = users
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("user-msg" , (message) =>{
        io.emit("user-msg" , message);
    })
  });
  


//express will handle the http req

app.use(express.static(path.resolve("./public")));

app.get("/" , (req,res) =>{
    res.sendFile("./public/index.html");
});

server.listen(port,() =>{
    console.log(`Our server is listening on port : ${port}`)
});
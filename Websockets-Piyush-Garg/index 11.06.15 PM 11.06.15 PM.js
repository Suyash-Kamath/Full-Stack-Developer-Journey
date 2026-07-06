const express = require("express");

const path= require('path')
const app = express();
// http module is used because , express ke saath socket.io ko attach karna hai , to directly app.listen nahi karsakte
const dotenv = require("dotenv");

const http = require("http");
const {Server} = require('socket.io')
dotenv.config();

const server = http.createServer(app);
const io = new Server(server)

// socket.io
// in this, users are called sockets
io.on('connection',(socket)=>{

    console.log('A new User has connected ',socket.id);
    socket.on('chat-message',(message)=>{
        // console.log("A new user message ",message);
        // io means jitne bhi conection
        io.emit("message",message) // agar frontend me kisi bhi user se message aata hai toh sabko dedo

    })
    

})

app.use(express.static(path.resolve('./public')))

app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html')
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

const http = require('http');
const fs = require('fs');
const path = require('path');
// const EventEmitter = require('events');

// class LogEmitter extends EventEmitter {}

const EventEmitter = require('./emitter')


const logEmitter = new EventEmitter();

const logDir = path.join(__dirname,'log');

if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

const logFile = path.join(logDir,'requests.log');

if(!fs.existsSync(logFile)){
    fs.writeFileSync(logFile,'');
}

logEmitter.on('log',(message)=>{
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - ${message}\n`;
    fs.appendFileSync(logFile,logEntry,(err)=>{
        if(err){
            console.error(`Error writing to log file: ${err.message}`);
        }
    })
})



const server = http.createServer((req,res)=>{

    if(req.url ==='/favicon.ico'){
        res.writeHead(204); 
        res.end();
        return;
    }
    const filePath = path.join(__dirname,'public','index.html');

    logEmitter.emit('log',`Request for ${req.url}`);

    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('Internal server error');
            logEmitter.emit('log',`Error reading file: ${err.message}`);
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
            logEmitter.emit('log','File sent');
        }
    })
})

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
    logEmitter.emit('log',`Server started on port ${PORT}`);
    
});

/*

*/
// frontend ki file ko backend se send karna (serve karna hai)

const http = require('http');
const path = require('path');

const fs = require('fs');


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    //    const filePath = __dirname + '/index.html';
    const pathName = path.join(__dirname,'index.html')
    const htmlContent = fs.readFileSync(pathName);
    res.end(htmlContent)
    // if you dont use readFileSync then you are simple printing the filePath , means only text of the path, not the content of the file
})

server.listen(8000,()=>{
    console.log('Server is running at port 3000');
});
    
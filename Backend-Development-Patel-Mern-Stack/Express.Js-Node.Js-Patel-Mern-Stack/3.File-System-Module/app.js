const fs  = require("fs");

// Reading file
// console.log("Before Reading File");

// fs.readFile("./input.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log(error.message);
        
//     }
//     else{
//         console.log(data);
//     }
// })

/* if you dont add "utf-8" parameter , what happens

What is a Buffer?
In Node.js, a buffer is a chunk of memory used to store raw binary data. When you read a file in binary form (especially non-text files), the output you get is a Buffer. The Buffer object is not human-readable by default, and it stores the raw data in binary format.
Interpreting the Output:
This is the binary representation of the contents in input.txt. To make it readable, you need to convert it to a string (in most cases, it's a UTF-8 encoded string).
The Buffer shown can be converted to a readable string like this:

Hexadecimal to String: Each pair of characters in the buffer represents a byte (in hexadecimal). These can be translated to characters. For example:
48 (hex) is H in ASCII.
65 (hex) is e in ASCII.
6c (hex) is l in ASCII.
6c (hex) again is l in ASCII.
6f (hex) is o in ASCII.
And so on.


What is a Buffer in Node.js?
A Buffer is a built-in object in Node.js that allows you to work with raw binary data directly. It's a special object that is used to represent data that isn't necessarily in a readable string format, but in raw bytes (such as binary or file data). Buffers are commonly used for file handling, streams, and other binary data manipulation in Node.js.

Buffers are useful because they can hold data that you don't necessarily want to manipulate as strings (e.g., binary data in images, files, network requests, etc.).

Why do we need Buffer in Node.js?
In JavaScript, strings are typically encoded in UTF-16 or UTF-8 format. But not all data fits neatly into this model. Binary data (like images, videos, files, etc.) needs to be processed in a different way, which is why Node.js provides Buffers.

Key Characteristics of Buffers:
Fixed Size: A buffer's size is fixed when it is created and cannot be resized.
Raw Binary Data: Buffers store data as raw binary. When working with files, they allow you to access the data at a byte level.
Not UTF-8: Buffers are different from strings because strings are UTF-8 encoded, while buffers hold raw binary data.

*/

// console.log("After Reading File");




// console.log("Before Reading File Synchrnously");

// // //  can do this for sync  but not for async ones
// const data=fs.readFileSync("./input.txt","utf-8")
// console.log(data);

// console.log("After Reading File Synchronously");


// you already know the difference between readFileSync and readFile

// javaScript is single threaded and synchronous language and nodejs is asynchronous 


// Writing File

// fs.writeFile("./input.txt","Hello World",(error)=>{
//     if(error){
//         console.log(error.message);
        
//     }
//     else{
//         console.log("File Written Successfully");
//     }
// })

// fs.appendFile("./input.txt","\nHello node.js developers",(error)=>{
//     if(error){
//         console.log(error.message);
        
//     }
//     else{
//         console.log("File Appended Successfully");
//     }
// })
// delete file
// fs.unlink("./input.txt",(error)=>{
//     if(error){
//         console.log(error.message);
        
//     }
//     else{
//         console.log("File Deleted Successfully");
//     }
// })


// if files are in GBs or MBs

// recommended to use streams , they are async by the way . Yes, fs.createReadStream is asynchronous.
// you can also write {encoding:"utf-8"} as well as "utf-8" , 

// console.log("Before Reading File using readStream");

// const readStream=fs.createReadStream("./input.txt",{encoding:"utf-8"});
// readStream.on("data",(chunk)=>{
//     console.log(chunk);
    
// })

// readStream.on("end",()=>{
// console.log("Reading File Completed");
// })

// console.log("After Reading File using readStream");

// const writeStream=fs.createWriteStream("./input.txt",{encoding:"utf-8"});

// writeStream.write("Welcome to Node.js");


// pipe -> trasnfer data from one file to another file

const readStream1=fs.createReadStream("./input.txt");

const writeStream1=fs.createWriteStream("./output.txt");

readStream1.pipe(writeStream1);
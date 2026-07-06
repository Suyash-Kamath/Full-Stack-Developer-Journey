// const Emitter = require("./emitter")

// lets use in-build module
const Emitter = require("events")
const events = require('./config').events
const emitter  = new Emitter();

// adding event listener (callback function) using on

emitter.on(events.GREET,function (){
    console.log("Hello");
    
})

emitter.on(events.GREET,function  (){
    console.log("Greet Ocurred");
    
})

emitter.on(events.FILEOPEN,function  (){
    console.log("File is opened");
    
})

emitter.on(events.FILESAVED,function  (){
    console.log("File is saved");
    
})

emitter.on("myAge",function  (){
    console.log("I am 21 years old");
    
})


// the above all code are bad practice , while writing type , I did a mistake , let's say adding a new type , 
// sabme changes kar doge  , I want is change in one reflect in all 
// lets make a file(module) config.js

// console.log(emitter);

// emitter.emit("greet")
// emitter.emit("myAge")

emitter.emit(events.FILEOPEN)
emitter.emit(events.FILESAVED)
emitter.emit(events.GREET)
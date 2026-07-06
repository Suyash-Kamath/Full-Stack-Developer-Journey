// JavaScript's Default behaviour is Prototypal Behaviour
// Javascript never gives up , it goes to parent , grandparent level if it doesn't get anything which is expected it goes to upper level till it gets null

// So because of such behaviour , "this" keyword works  , arrow functin has no access of "this" because of prototyope

// prototype gives access/ working of new keyword , classes , this keyword and inheritance 

// Prototypal inheritance

function multiplyBy5(num) {
    this.num = num;



    return num*5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
// prototype ka by default kuch context set hotey hai uss method ka "this" hai, prototype sirf method nahi , uske saath saath kuch internal property bhi deta hai
// toh function ki bhi property hogi jaise likha hai this.num = num
console.log(multiplyBy5)




// function bhi object hai , every stuff is object in Javascript , function is function as well as Object , we can make anything behave as an object


// end of the day , har koi chiiz milti hai object se  , this Prototypal inheritance

// this keyword also related to the prototype

function createUser(username,score){

    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}


createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score} and username is ${this.username}`);
    
}

const chai = new createUser('chai',25)
const tea =  new createUser('tea',250)

chai.printMe() // syntactic sugar , behind the scene , prototype is added,, but got error
// Cannot read properties of undefined (reading 'printMe')
// properties are injected in the prototype , but we are not using new keyword , so it is not working , 
// jABHI function se vale transfer kari hai tabhi bataya nahi ki aditional properties aayi hai , so new keyword batata hai

/*

Let's break down the code and its behavior step by step:

Code Overview:
javascript
Copy code
function multiplyBy5(num) {
    this.num = num;          // Assigns num to 'this.num' (depends on how the function is called)
    return num * 5;          // Returns num multiplied by 5
}

multiplyBy5.power = 2;        // Adds a custom property 'power' to the function
console.log(multiplyBy5(5));  // Calls the function with argument 5
console.log(multiplyBy5.power);  // Accesses the custom property 'power'
console.log(multiplyBy5.prototype);  // Logs the prototype of the function
console.log(multiplyBy5);     // Logs the function itself
Step-by-Step Explanation:
1. multiplyBy5(5)
The function is called with 5 as the argument.
Inside the function, this.num = num attempts to assign num to a num property on the this object.
In non-strict mode, if the function is called like this (without an object), this refers to the global object (window in browsers or global in Node.js). So, it tries to set window.num = 5 or global.num = 5.
In strict mode, this would be undefined in this scenario, and trying to assign this.num would throw an error.
The function returns num * 5, so the output of multiplyBy5(5) is 25.
2. multiplyBy5.power
power is a property explicitly added to the multiplyBy5 function object: multiplyBy5.power = 2.
JavaScript functions are also objects, so you can add properties to them like this.
The output of console.log(multiplyBy5.power) is 2.
3. multiplyBy5.prototype
The prototype property exists on all functions in JavaScript. It is an object that is used for inheritance when the function is used as a constructor.

By default, this prototype object contains a single property:

javascript
Copy code
{
  constructor: [Function: multiplyBy5]
}
This means that if you create objects using new multiplyBy5(), they will inherit from this prototype object.

The output of console.log(multiplyBy5.prototype) is:

javascript
Copy code
{ constructor: [Function: multiplyBy5] }
4. console.log(multiplyBy5)
This logs the function definition itself.
The output will be:
javascript
Copy code
function multiplyBy5(num) {
    this.num = num;
    return num * 5;
}
About this and prototype:
this in the function:
The value of this depends on how the function is called:

If called as multiplyBy5(5), this refers to the global object.
If called with new multiplyBy5(5), this refers to the newly created object.
prototype property:
Every function in JavaScript has a prototype property. This is not related to the function execution itself but is used when the function is used as a constructor.

Recap of Outputs:
javascript
Copy code
console.log(multiplyBy5(5));       // 25
console.log(multiplyBy5.power);    // 2
console.log(multiplyBy5.prototype); // { constructor: [Function: multiplyBy5] }
console.log(multiplyBy5);          // Logs the function code



No, the prototype of the multiplyBy5 function does not have a num property. Here's why:

Key Concept:
The prototype is an object that is used when the function is called with new, and it doesn't directly reflect what happens inside the function body during regular function calls.

Why Doesn't num Appear in prototype?
this.num in the Function:

When you call multiplyBy5(5), the this.num = num line assigns the value of num to the this object.
However, in regular function calls (multiplyBy5(5)), this typically refers to the global object (in non-strict mode) or undefined (in strict mode). This does not affect the prototype.
prototype Role:

The prototype is used as a blueprint for objects created using new. For example:
javascript
Copy code
function multiplyBy5(num) {
    this.num = num;
    return num * 5;
}
const obj = new multiplyBy5(5); // Creates an object
When new is used, this refers to the newly created object, and obj will inherit from multiplyBy5.prototype.
But num is not automatically added to the prototype; it is added to the object itself (obj.num).
What is in prototype?

By default, multiplyBy5.prototype only has the constructor property:
javascript
Copy code
{
    constructor: [Function: multiplyBy5]
}
Adding Properties to prototype:

If you want num or any other property to be part of the prototype, you must explicitly add it:
javascript
Copy code
multiplyBy5.prototype.num = 0; // Adds a 'num' property to the prototype
Proof and Example:
javascript
Copy code
function multiplyBy5(num) {
    this.num = num; // Assigns to the 'this' object, not the prototype
    return num * 5;
}

console.log(multiplyBy5.prototype); // Logs: { constructor: [Function: multiplyBy5] }
console.log(multiplyBy5.prototype.num); // undefined (not added to prototype)

const obj = new multiplyBy5(5); // Creates a new object
console.log(obj.num); // 5 (exists on the object, not the prototype)
Summary:
The prototype of a function does not automatically include properties like num.
Properties like num are added to the instance (this), not to the prototype, unless explicitly defined on the prototype.


https://chatgpt.com/share/67669f28-0204-8006-8266-44a0db3d5568

*/

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor 
function. This means that it has access to properties and methods defined on the constructor's prototype.

JavaScript new keyword ke through constructor functon deti hai

The constructor is called: The constructor function is called with the specified arguments and this is bound 
to the newly created object. If no explicit return value is specified from the constructor, 
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
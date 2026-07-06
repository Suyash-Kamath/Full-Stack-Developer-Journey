// let myName  = "Suyash     "
// let myChannelName = "CodeWithSuyash     "
// console.log(myName.length);

// // console.log(myName.trim().length); low IQ waali baat


// console.log(myName.truelength);


let myHeroes = ["Thor","Spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPoer:function(){
        console.log(`Spiderman has power of ${this.spiderman}`);
        
    }
}

// Object datatype

Object.prototype.suyash = function(){
    console.log("Suyash is present in all objects");
    
}

function namastebro(){
    console.log("Namaste bro");
    
}
// namastebro.suyash()

// heroPower.suyash()

// myHeroes.suyash()

Array.prototype.heySuyash = function(){
    console.log("Hey Suyash");
    
}

// myHeroes.heySuyash()
// heroPower.heySuyash() dont have access of heySuyash

// Inheritance in JavaScript

const Teacher = {

    makeVideo:true

}

const TeachingSupport = {
    isAvailable:false
}

const TASupport ={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

const User = {
    name:"Suyash",
    email:"suyash@google.com",
    courseCount:5,
    __proto__:Teacher
}

// this is what prototypal inheritance is , but outdated approach
// Teacher.__proto__ = User
// pehele ke time pe classes nahi the , so object se kaam chalana padta tha
// object ke andhar hi properties and functions add karte the
// Harr object ek dusre se alag hai 


// if you want to use the properties of one object in another object then you can use __proto__ property


// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher) // TeachingSupport a property access  karega  Teacher ka 


let anotherUsername = "SuyashKamath    "

String.prototype.trueLength = function(){
    console.log(`${this}`); // gives the string value as reference 
    // console.log(`${this.name}`); deprecated property , not working 
    console.log(`True length is ${this.trim().length}`);
    
    
}

anotherUsername.trueLength();

"suyash".trueLength()
"icetea".trueLength()

/*
Why is this.name undefined?

this refers to the string (like "SuyashKamath "), and strings do not have a property called name. This is why this.name results in undefined.
If you want to access properties like name, you need to define them explicitly on the string object (which is uncommon and non-standard), or you could use something else, like a custom object, to store additional properties.
*/

// this is javascript actual oops , rest was sugar coating
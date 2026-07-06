// index.js
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

// Use the imported functions
const num1 = 10;
const num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${add.add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtract.subtract(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiply.multiply(num1, num2)}`);
console.log(`Division: ${num1} / ${num2} = ${divide.divide(num1, num2)}`);

// app.js
const { add, subtract } = require('./math'); // Importing named exports

const sum = add(5, 3);
const difference = subtract(10, 7);

console.log('Sum:', sum); // Output: Sum: 8
console.log('Difference:', difference); // Output: Difference: 3

// Importing the 'os' module (built-in)
const os = require('os');

// Get system information
console.log('Operating System:', os.type());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem(), 'bytes');
console.log('Free Memory:', os.freemem(), 'bytes');



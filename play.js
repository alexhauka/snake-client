const connect = require('./client');
const setupInput = require('./input')
console.log('Connecting...');
// connect();  // => moved to param in line 6

setupInput(connect());
// IGNORE THIS- INCOMPLETE
const dns = require('dns');
const fs = require('fs');

console.log('Start of script');

// Timers Phase
setTimeout(() => {
  console.log('Timer callback - Timers Phase');
}, 0);

// Immediate Phase
setImmediate(() => {
  console.log('Immediate callback - Immediate Phase');
});

// I/O Callbacks Phase
fs.readFile('test.txt', 'utf-8', (err, data) => {
  console.log('File Read callback - I/O Callbacks Phase');
});

// Close Callbacks Phase
const server = require('http').createServer();
server.listen(3000, () => {
  console.log('Server listening on port 3000 - Close Callbacks Phase');
});

server.on('close', () => {
  console.log('Server close callback - Close Callbacks Phase');
});

// Pending Callbacks Phase
dns.resolve4('www.klasdjflasjdf.com', (err, addresses) => {
  console.log('DNS resolve callback - Pending Callbacks Phase');
});

console.log('End of script');



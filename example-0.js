console.log('Start of script');

// Close Callbacks Phase
const server = require('http').createServer();
server.listen(3000, () => {
  console.log('Server listening on port 3000 - Close Callbacks Phase');
});

server.on('close', () => {
  console.log('Server close callback - Close Callbacks Phase');
});

// Timers Phase
setTimeout(() => {
  console.log('Timer callback - Timers Phase');
}, 0);

// Pending Callbacks Phase
process.nextTick(() => {
  console.log('Pending Callback - Pending Callbacks Phase');
});

// Check Phase
setImmediate(() => {
  console.log('Immediate callback - Immediate Phase');
});

// I/O Callbacks Phase
const fs = require('fs');
fs.readFile('example.txt', (err, data) => {
  console.log('File Read callback - I/O Callbacks Phase');
});

console.log('End of script');

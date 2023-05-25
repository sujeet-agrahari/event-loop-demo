const fs = require('fs');

// takeaway -> event loop will go in wait mode in poll phase and wait for the least timed out task or I/O event if there isn't anything in check phase

function checkEventLoop() {
  if (process._getActiveHandles().length === 1 && process._getActiveRequests().length === 0) {
    console.log('Event loop is idle');
  } else {
    console.log('Event loop is not idle');
  }
  setTimeout(checkEventLoop, 1000);
}

checkEventLoop();

// Read a file and start a timer
fs.readFile('test.txt', (err, data) => {
  if (err) throw err;
  console.log('File read complete');
});

setTimeout(() => {
  console.log('Timer complete');
}, 1000);


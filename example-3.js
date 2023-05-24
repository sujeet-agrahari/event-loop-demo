const fs = require('fs');

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
fs.readFile('long.txt', (err, data) => {
  if (err) throw err;
  console.log('File read complete');
});

setTimeout(() => {
  console.log('Timer complete');
}, 1000);

/*
When the program starts, the checkEventLoop() function is called for the first time, and it logs "Event loop is not idle" because there is an active file read operation in progress.
After the file read operation is complete, the callback function is executed, and the message "File read complete" is logged to the console. At this point, there are no active requests or handles in the event loop, so the checkEventLoop() function logs "Event loop is idle".
Next, a timer is started using setTimeout(). This is an asynchronous operation that will not block the event loop. Once the timer fires after 1 second, the message "Timer complete" is logged to the console. Again, there are no active requests or handles in the event loop, so the checkEventLoop() function logs "Event loop is idle".
Finally, the checkEventLoop() function is called repeatedly using setImmediate(), and it logs "Event loop is idle" because there are no active requests or handles in the event loop.
*/
// timeout_vs_immediate.js
// takeaway -> setImmediate(check phase) will be executed if the event loop is in poll phase before going to timer phase
const fs = require('fs');

// it will directly land into poll phase and then check phase
fs.readFile('test.test', 'utf-8', () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

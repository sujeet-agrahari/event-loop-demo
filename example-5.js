// timeout_vs_immediate.js
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

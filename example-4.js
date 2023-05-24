// timeout_vs_immediate.js

// it will go to timer, poll and then check phase
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
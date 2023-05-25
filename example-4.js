// timeout_vs_immediate.js

// it will go to timer, poll and then check phase
// takeaway -> normal execution order, nothing to wait for or do in poll phase so it will first execute the check phase
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
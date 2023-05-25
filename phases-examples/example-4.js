// timeout_vs_immediate.js
// This is un-deterministic, it can be determined
// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick#setimmediate-vs-settimeout

setTimeout(() => {
  console.log('timeout');
}, 1);

setImmediate(() => {
  console.log('immediate');
});
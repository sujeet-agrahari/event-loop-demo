// takeaway 2 -> process.netTick runs immediately and setImmediate runs on next tick => blame node.js maintainers 🥲
// they accepted the mistake, but they can't change it as thousands of npm libraries depend on this, and new are being added
setImmediate(() => console.log('setImmediate'))
process.nextTick(() => console.log('process.nextTick'))
console.log('I am first..I am first...!!')
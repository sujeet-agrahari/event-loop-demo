// takeaway 1 -> process.netTick runs immediately and setImmediate runs on next tick => blame node.js maintainers 🥲
// they accepted the mistake, but they can't change it as thousands of npm libraries depend on this, and new are being added

// takeaway 2 -> If you put things in process.nextTick a lot, other callback will not be executed and will block the loop
setImmediate(() => console.log('setImmediate'))
process.nextTick(() => console.log('process.nextTick1'))
process.nextTick(() => console.log('process.nextTick2'))
process.nextTick(() => console.log('process.nextTick3'))
process.nextTick(() => console.log('process.nextTick4'))

console.log('Ham first..Ham first...!!')
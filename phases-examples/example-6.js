// takeaway -> process.nextTick takes precedency over asynchronous code
setTimeout(() => console.log('setTimeOut'), 1)
setImmediate(() => console.log('setImmediate'))
process.nextTick(() => console.log('process.nextTick'))
console.log('Ham first..Ham first...!!')
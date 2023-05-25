// takeaway -> process.nextTick takes precedency over asynchronous code
setImmediate(() => console.log('setImmediate'))
setTimeout(() => console.log('setTimeOut'), 0)
process.nextTick(() => console.log('process.nextTick'))
console.log('I am first..I am first...!!')

// takeaway -> Promise callbacks are micro tasks and will be called next after the process.nextTick
const fs = require('fs');

Promise.resolve().then(() => console.log('promise1')).then(() => console.log('promise2'))

setImmediate(() => console.log('setImmediate'))
setTimeout(() => console.log('setTimeOut'), 0)
process.nextTick(() => console.log('process.nextTick'))

fs.readFile('test.txt', 'utf-8', (err, data) => {
  console.log('file')
})
console.log('I am first..I am first...!!')

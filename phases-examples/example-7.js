// takeaway 1 -> process.nextTick takes precedency over asynchronous code
const fs = require('fs');

setImmediate(() => console.log('setImmediate'))
setTimeout(() => console.log('setTimeOut'), 0)
process.nextTick(() => console.log('process.nextTick'))
fs.readFile('test.txt', 'utf-8', (err, data) => {
  console.log('file')
})
console.log('Ham first..Ham first...!!')


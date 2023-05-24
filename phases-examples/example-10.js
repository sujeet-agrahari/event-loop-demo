// takeaway -> all the tasks in microtask will be process before going to next phase

process.nextTick(() => 'process.nextTick => Outside')
Promise.resolve()
.then(() => console.log('promise1'))
.then(() => console.log('promise2'))
.then(() => process.nextTick(() => console.log('process.nextTick1')))
.then(() => process.nextTick(() => console.log('process.nextTick2')))
.then(() => console.log('promise3'))


console.log('I am first..I am first...!!')

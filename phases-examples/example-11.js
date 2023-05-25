
// process.nextTick() will be called after current process is finished in any phase
const fs = require('fs');

fs.readFile('test.txt', 'utf-8', () => {
    console.log('file-1')
    process.nextTick(() => console.log('file-1-nextTick'))
    console.log('end-file-1')
    
})


fs.readFile('test.txt', 'utf-8', () => {
    console.log('file-2')
    process.nextTick(() => console.log('file-2-nextTick'))
    console.log('end-file-2')
})

process.nextTick(() => console.log('nextTick Outer'))
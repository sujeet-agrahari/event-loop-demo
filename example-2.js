// process.nextTick will be called instantly in the next phase i.e. end of the current loop
const fs = require('fs');

console.log('Start');
setTimeout(() => {
  console.log('timeout');
}, 0);

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

process.nextTick(() => {
  console.log('Next Tick');
});

console.log('End');

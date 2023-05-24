// process.nextTick will be called instantly in the next phase
const fs = require('fs');

console.log('Start');

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

process.nextTick(() => {
  console.log('Next Tick');
});

console.log('End');

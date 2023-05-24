const process = require('process');

// Virtual address space
console.log(process.memoryUsage());

// Executable code
console.log(process.argv);

// Open handles to system objects
console.log(process._getActiveHandles());

// Unique process identifier
console.log(process.pid);

// Environment variables
console.log(process.env);

// Threads of execution
const cluster = require('cluster');
if (cluster.isMaster) {
  console.log(`Master process running with PID ${process.pid}`);
  for (let i = 0; i < 4; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker process running with PID ${process.pid}`);
}

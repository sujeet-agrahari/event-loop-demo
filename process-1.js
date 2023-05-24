const process = require('process');
const os = require('os');

// Process ID
const processId = process.pid;
console.log('Process ID:', processId);

// Virtual address space
const vmem = process.memoryUsage().rss;
console.log('Virtual Memory (RSS):', vmem, 'bytes');

// Executable code
const scriptPath = process.argv[1];
console.log('Executable Code Path:', scriptPath);

// Open handles to system objects
const openHandles = process._getActiveHandles().length;
console.log('Open Handles:', openHandles);

// Security context (not directly accessible in Node.js)

// Environment variables
const envVariables = process.env;
console.log('Environment Variables:', envVariables);

// Priority class (not directly accessible in Node.js)

// Minimum and maximum working set sizes (not directly accessible in Node.js)

// Number of threads
const threadCount = os.cpus().length;
console.log('Thread Count:', threadCount);

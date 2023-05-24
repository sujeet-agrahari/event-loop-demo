const { Worker } = require('worker_threads');

// Create a new worker thread
const worker = new Worker('./worker.js');

// When a worker thread is created, it emits an 'online' event when it is ready to receive messages.
worker.on('online', () => {
  // Log the details of the thread
  console.log(`Thread ID: ${worker.threadId}`);

  // Get the heap snapshot to indirectly determine the thread stack size
  const heapSnapshot = worker.getHeapSnapshot();
  const stackSize = heapSnapshot.totalHeapSize - heapSnapshot.usedHeapSize;
  console.log(`Thread stack size: ${stackSize}`);

  // Indirectly determine the thread priority using the heap memory usage
  const heapUsed = worker.resourceLimits.heapUsed;
  const priority = heapUsed > 500 ? 'high' : 'low';
  console.log(`Thread priority: ${priority}`);
});

// Receive the result from the worker thread
worker.on('message', (result) => {
  console.log('Result:', result);
});

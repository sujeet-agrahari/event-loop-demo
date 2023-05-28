function enqueueTasks() {
  Promise.resolve().then(() => console.log('Promise reaction 1'));
  queueMicrotask(() => console.log('queueMicrotask 1'));
  process.nextTick(() => console.log('nextTick 1'));
  setImmediate(() => console.log('setImmediate 1')); // (A)
  setTimeout(() => console.log('setTimeout 1'), 0);
  
  Promise.resolve().then(() => console.log('Promise reaction 2'));
  queueMicrotask(() => console.log('queueMicrotask 2'));
  process.nextTick(() => console.log('nextTick 2'));
  setImmediate(() => console.log('setImmediate 2')); // (B)
  setTimeout(() => console.log('setTimeout 2'), 0);
}

setImmediate(enqueueTasks);
// node.js event loop priority of phases and their execution order
// 1. timer no due 
// 2. poll phase -> is any timer due? No process the I/O queue until the queue is exhausted or the lest timer is due
// 3. poll phase -> is timer due? No. Is task in queue? No. Check for setImmediate and execute the callback
// 4. poll phase -> is timer due? No. is task in queue? No. Is callback in check phase? No. Block for I/O and wait.

// process.nextTick() or promise callbacks
// consider them as a separate queue, event loop will process them before executing next callback/task in the same phase

// 1. timers? -> loop over microtask and prose callback queue
// 2. poll phase? -> is any timer due? Process timer callback and then loop over microtask and prose callback queue
// 3. poll phase? -> Is any timer due? No. Is task in queue? No. process the setImmediate callback and then loop over microtask and prose callback queue

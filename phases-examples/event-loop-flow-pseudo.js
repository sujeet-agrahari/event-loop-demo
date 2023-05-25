
// process.nextTick() will be called after current process is finished in any phase
while (TIMERS_OR_EVENTS_POSSIBLE) {
    if (shouldExecuteTimers(now)) doExecuteExpiredTimers();
    handleProcessNextTick();
    while (callback = pollForEvents() && count++ < MAX_POLL) {
      if (callback.eventType === 'close') {
        addToCloseQueue(callback);
        continue;
      }
      callback();
    }
    handleProcessNextTick();
    if (setImmediateQueue) runSetImmediateQueue();
    handleProcessNextTick();
    if (closeQueue) runCloseQueue();
    handleProcessNextTick();
  }
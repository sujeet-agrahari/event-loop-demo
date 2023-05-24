const pidusage = require('pidusage');

// Specify the PID of the process you want to get details for
const targetPID = 1234; // Replace with the desired PID

// Get resource usage details for the process
pidusage.stat(targetPID, (err, stats) => {
  if (err) {
    console.error(`Error retrieving process stats: ${err}`);
    return;
  }

  // Access the resource allocation and other details
  console.log('CPU usage:', stats.cpu);
  console.log('Memory usage:', stats.memory);
  console.log('Start time:', stats.startTime);
  console.log('Running time:', stats.elapsed);
});

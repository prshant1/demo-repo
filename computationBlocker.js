console.log("start");
require('./_fibonacii');
console.log("end");
// since Node is single threaded this delay could result in serious problem for multiple users for this we have Non blockers computation.
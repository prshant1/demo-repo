// to create a child process in node we use native node module child_process and asssign to a var so we can apply spawn method on it.
var child_process = require('child_process');  // child process module
console.log("1");
var newProcess = child_process.spawn('node',['_fibonacii.js'],{
    stdio : 'inherit'
});

console.log("2");
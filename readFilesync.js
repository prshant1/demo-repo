// to work with file system using node we need to bring native node module fs using require this method is sync it will stop the process flow.
var fs = require('fs');
console.log("Going to get a file");
var file = fs.readFileSync('readFilesync.js');
console.log("Got the file");
console.log("App continues......");
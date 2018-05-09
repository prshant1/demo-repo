var fs = require('fs');
// we are going to apply async method using anonymous call backs that dosent stop the flow of main process
console.log("Going to get a File");
fs.readFile('readFileAsync.js',function(err,file){

    console.log("Got the File");
});
console.log("App is continued.............\n");

// anonymous call backs becomes hard for unit testing when there are a lot of call backs.

console.log("Going to get a File");
var onFileLoad = function(err,file){
    console.log("Got the File");
};
fs.readFile('readFileAsync.js',onFileLoad);
console.log("App is continued...........");
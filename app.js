// require('./instantHello');
// var goodbye = require('./Talk/goodBye');
//var talk = require('./Talk');
var ques = require('./talk/question');

var ans = ques.ask("what is the meaning of Life?");
console.log(ans);

// talk.hello('Verma');
// talk.intro();
var goodbye = require('./Talk/goodBye');
goodbye();

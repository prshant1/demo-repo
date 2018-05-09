require('./instantHello');
var goodbye = require('./Talk/goodBye');
var talk = require('./Talk');
var question = require('./talk/question');

var ans = question.ask("what is the meaning of Life?");
console.log(ans);

talk.hello('Hi');
talk.intro();
goodbye();

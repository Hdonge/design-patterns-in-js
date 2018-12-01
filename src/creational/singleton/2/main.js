var singletonObject = require('./singleton');

var singleA = singletonObject.getInstance();
var singleB = singletonObject.getInstance();

console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); //true
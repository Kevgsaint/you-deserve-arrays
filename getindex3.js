const prompt = require('prompt-sync')({ sigint: true });


let userArray = JSON.parse(prompt("Enter an array: "));

console.log(userArray);

console.log("The third item in the userArray is: " + userArray[2]);


if (userArray.length < [3])
console.log("The value of the last index is " + userArray[userArray.length-1])
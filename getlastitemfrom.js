const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter an array: "));

console.log("The last item in the array array is: " + userArray[userArray.length-1]);

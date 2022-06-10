const prompt = require('prompt-sync')({sigint: true});

let uarray = JSON.parse(prompt("Enter an Array: "));

if (typeof uarray [0] === "number") {
console.log("The first ltem in your array" + uarray[0] + " is a number")
}

if (typeof uarray[0] !== "number") {
    console.log("The first item in you array" + uarray[0] + "is not a number")
}

const prompt = require('prompt-sync')({sigint: true});
let uarray = JSON.parse(prompt('enter an array: '));
console.log(uarray);

if(uarray.length >= 30) {
    console.log("Lenth of this array is at least" + uarray.length)
} else if (uarray.length < 10){
    console.log("Your array length is too short" + uarray.length)
}
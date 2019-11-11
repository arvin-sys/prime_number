const util = require("./myUtils.js");
const reader = require ("readLine-sync");


const firstPositive = reader.questionInt("Enter the first positive number: ");
const secondPositive = reader.questionInt("Enter the second positive number: ");

let arr = new Array();

for (let i = firstPositive ; i <= secondPositive; i++){
    if(util.isPrime(i)){
        arr.push(i); 
    }
}
    util.printArrayItems(arr);
     






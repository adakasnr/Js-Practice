// Iterate(run/go throuh again or repeat) with while Loop

// example
var myArray = [];   // empty array

var i = 0;        // variable i
console.log(i);  //to find i value after each loop
while (i < 5) { //we have given condition i.e., run the block code until the condition gets false
    myArray.push(i);        //push- adds new element to the end of an array and retuns new length
    console.log(myArray);  // to find myArray after each loop
    i++;                  //increment
    console.log(myArray);// to check any changes in array after increment
    console.log(i);     //to find i value 
}
// each time we pushed a new digit onto the array
console.log(myArray); //to find myArray value after completing the loop

//Iterate with for loop, it is most common type of loop in js
var ourArray = [];

for (var i = 0; i < 5; i++) {  //there are three parentheses seperated with ;
    ourArray.push(i);
}

/* three parentheses
(var i = 0)-initialization
(i < 5) - condition
(i++) - final expression
*/

console.log(ourArray);

// find odd number with for loop
var evenNumber = []

for (var i = 0; i < 10; i += 2) {
    evenNumber.push(i)
}
// (i = i+2) === (i+=2)
console.log(evenNumber);

// counting backwards

// Iterate through an array with a for loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i]    //ourTotal = ourTotal+ourarr[0]
}

console.log(ourTotal);

// nesting for loops

// Do while loops
/*
while loop- first checks the condition before it runs any code within the loop
Do while loop- will always run at least one time and then it will check the condition 
*/

// Do While
var myArraDoWhilw = []
var i = 10;

do {
    myArraDoWhilw.push(i)
    i++
} while (i < 5);

console.log(i, myArraDoWhilw); // result- 11 [ 10 ]

// While loop
var myArraWhile = []
var i = 10;

while (i < 5) {
    myArraWhile.push(i)
    i++
}

console.log(i, myArraWhile);  //result- 10 []

// Profile lookup

// Random fraction and Whole number ?not working

function randomFraction() {

    return Math.random();
}

console.log("randomFraction" + randomFraction);

// generate random number
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

    return Math.floor(Math.random() * 2000);
}

console.log(randomWholeNum());
console.log(randomWholeNum());

//Floor- Returns the greatest integer less than or equal to its numeric argument.

// generate random number within range  ?notWorking

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1,9);

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

ourRandomRange(5,15);

// parseInt function- it takes a string and retuns an integer
function convertToInteger(str) {
    return parseInt(str)
} 
console.log(convertToInteger("56"));

// use the parseInt function with a Radix ?
// Radix specifies the base of the number in the string

// Ternary operator- 
function checkEqual(a,b) {
    return a === b ? true :false // syntax of ternary operator
    return a === b;             // it works as above, usually we use this only
}                            //we can write anything in the place of true&false but within string

console.log(checkEqual(1,1));

// Multiple ternary operator-
function checksSign(num) {
    return num > 0 ? "positive" : num <0 ? "negative" : "zero"  // 3 conditions are there
}

console.log(checksSign(-10));




// function helps us to reuse the code, when we have same task to perform at multiple situation we can create a function and use

// Syntax
function name(params) {

}

/*
name- function name
params-> we can pass information into the parenthesis
{}-> everything inside this curly bracket will run when we call the function 
return-> we can return a value from a function with return statement
*/

function names() {
    return "Siva"[0];
}
var data = names();
console.log("data-", data);

// passing values to the function with Arugments
function addition(a, b) {
    console.log(a + b);
}
addition(10, 20)
/* parameters are variables that act as place holder for the values that are input to the funtion when it is called
a&b which are in bracket params are called parameters
10&20 are arguments
we can pass any values as a arguments by calling the function with name then that function will perform the code  
*/

//Globalscope-> scope refers to the visibility of the variables, variables which are defined outside of a function block have global scope
// Localscope-> variables which are declared within a function as well as the function parameters have local scope 

function myLocalScope() {
    var myVar = 5;
    console.log("scope-", myVar); //it will show the result
}
/*
myLocalScope()
console.log("before functon",myVar); // it throws error as it can not accesses myVar variable b/c it is local which is inside
myLocalScope()
console.log("after function",myVar);
*/
// if we do not put var keyword to the variable it will automatically become global scope variable
// Note:- local variable overrides the global variable 
// Example
var outerWear = "T-Shirt"; //this is global variable b/c it is declared outside the function

function myOutfit() {
    var outerWear = "sweater" //this is local variable as it is inside the function 
    return outerWear
}
console.log(myOutfit()); //in console we get the local varaible value 

// scrimba

// assiginig returned value to a variable
var changed // here we have created a variable but its value not assigend yet 

function change(num) {
    return (num + 5) / 3; // here we are returnig a value after doing function task 
}
changed = change(10) // here we have passed arrgument that is 10 to the function and assigend that to the varible  
console.log("changed", changed);




// stand in-line
function nextInLine(arr, item) {
    arr.push(item);  // push is a array method, it will add new element at the end 
    // return item;
    return arr.shift(); // shift is an array method, it will remove first element from array
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); //here we have given the parameters to the function
console.log("After: " + JSON.stringify(testArr));

// If statement - it tells the js to execute the code in the curly braces
// When if statment is true the block of the code right after the if statement will be evaluated

function trueOrFalse(isThatTrue) {
    if (isThatTrue) {
        return "yes, that was true"
    }
}

/*
if (1 + 1) { // => 1+1 = 2 => true
    return "yes, that was true"
}
    if we mention return means the further line of code will not run,that we can see in the function if,if else, else if
    In the same manner if we write the return outside the function, that will be considered as the final, the code belowe to the retun will not run
*/

console.log("if: " + trueOrFalse(true));// in console we get the return statment b/c conditon followed 
console.log("if: " + trueOrFalse(false));// for this we get answer as undefined b/c we have not mentioned anything what if condition not followed, for this we can write another return after the if statement curly brace(check line 105) or we can write else statment 

/*
Operators
= this is used to assigin a valuse to variable(this is not a operator)
== Equality operator,this is used to compare equality(only value but not data type) on both sides.It attempts to convert both values being compared to a common type
=== Strict Equality operator, this is used to check both value as well as dataType.It does not do the type conversion 

!= Not equality operator, it is opposite to equality operator 
!== Strict Not equality operator, it is opposite to Strict equality operator 

> Greater than
< Not Greater than

|| Or operator is used when we try to check or pass any of the conditon
&& And operator is used when we try to check or pass the 2 conditions

*/

//Equality operator
function testDoubleEqual(number) {
    if (number == 10) {
        return "Equal"
    }
    return "not equal"
}
console.log("Test Equal- " + testDoubleEqual(10)); // this is number 
console.log("Test Equal- " + testDoubleEqual("10")); // this is also number but mentiond in string form, for this also we get return as Equal b/c it wil not check data type

//Strict Equality Operator
function testTrippleEqual(number) {
    if (number === 10) {
        return "Equal"
    }
    return "not equal"
}
console.log("Test Tripple Equal- " + testTrippleEqual(10)); // it shows result as Equal
console.log("Test Tripple Equal- " + testTrippleEqual("10"));// it shows not equal

//Not Equality Operator
function testStrictNotEqual(val) {
    if (val !== 10) {
        return "Not Equal";
    }
    return "Equal"
}
console.log("NotEqual: " + testStrictNotEqual("10"));
console.log("NotEqual: " + testStrictNotEqual(10));

// GreaterThan(>)
function testGreaterThan(val) {
    if (val > 111) {
        return "GreaterThan-111";
    }
    return "Not GreaterThan-111"
}

console.log("GreaterThan-111: " + testGreaterThan(110));
console.log("GreaterThan-111: " + testGreaterThan("112")); //it is comparing string values too
console.log("GreaterThan-111: " + testGreaterThan(113));

// greterOrEqual (>=)
function testGreaterOrEqual(val) {
    if (val >= 111) {
        return "GreaterThan or Equal to 111";
    }
    return "Not GreaterThan or Equal to-111"
}

console.log("GreaterOrEqual-111: " + testGreaterOrEqual(110));
console.log("GreaterOrEqual-111: " + testGreaterOrEqual("112"));//it is comparing string values too
console.log("GreaterOrEqual-111: " + testGreaterOrEqual(113));

// Note:- Lessthan and LessThanOrEqual will work in the same way of the greater and greaterThan or equal

// And(&)
function testLogicalAnd(val) {
    if (val >= 111 && val <= 211) {
        return "Yes";
    }
    return "No"
}

console.log("testLogicalAnd-: " + testLogicalAnd(110));
console.log("testLogicalAnd-: " + testLogicalAnd("112"));//it is comparing string values too
console.log("testLogicalAnd-: " + testLogicalAnd(113));
console.log("testLogicalAnd-: " + testLogicalAnd(111));
console.log("testLogicalAnd-: " + testLogicalAnd(211));
console.log("testLogicalAnd-: " + testLogicalAnd(212));

// Or(||)
function testLogicalOr(val) {
    if (val >= 111 || val <= 211) {
        return "Yes";
    }
    return "No"
}

console.log("testLogicalOr-: " + testLogicalOr(110));
console.log("testLogicalOr-: " + testLogicalOr("112"));//it is comparing string values too
console.log("testLogicalOr-: " + testLogicalOr(113));
console.log("testLogicalOr-: " + testLogicalOr(111));
console.log("testLogicalOr-: " + testLogicalOr(211));
console.log("testLogicalOr-: " + testLogicalOr(212));

// Else Statment-When if statment is true the block of the code right after the if statement will be evaluated, if not true Nothing happens. but with an else statment, an alternate block of code can be executed when its not true.

function checkFever(bodytemp) {
    if (bodytemp > 97) {
        return "fever";
    }
    if (bodytemp < 97) {   // here we have written 2 if statments
        return "no fever";
    }
}
console.log("checkFever: " + checkFever(99));
console.log("checkFever: " + checkFever(96));


function feverStatus(bodytemp) {
    if (bodytemp > 97) {
        return "fever";
    } else {                // insted of if condition we wrote else condition
        return "no fever";
    }
}
console.log("feverStatus: " + feverStatus(99));
console.log("feverStatus: " + feverStatus(97));
console.log("feverStatus: " + feverStatus(96));

// else if - if we have multiple conditions to be done, we can use else if statment

function feverMoniter(bodytemp) {
    if (bodytemp > 94 && bodytemp < 97) {
        return " no fever";
    } else if (bodytemp > 97 && bodytemp < 99) {
        return "fever- moderate";
    } else if (bodytemp >= 99 && bodytemp <= 105) {
        return "fever-High"
    } else {
        return "input error"
    }
}
console.log("feverMoniter: " + feverMoniter(62));
console.log("feverMoniter: " + feverMoniter(98));
console.log("feverMoniter: " + feverMoniter(99));
console.log("feverMoniter: " + feverMoniter(96));


function railWayTime(time, timeType) {
    let railway = 0
    if (timeType === "am") {
        railway = 0 + time
    }
    else if (timeType === "pm") {
        railway = 12 + time
    }
    return railway
}
console.log(railWayTime(3, "pm"));

let something = "1" && 2   // write explanation
console.log("something: " + something);

// golf code 
var names = ["hole-in-one", "Eagle", "birdie", "Par", "Boggey", "Double Boggy"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    }
    else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return "Go Home"
    }
}

console.log(golfScore(10, 15));

// switch Statment - it is used when we have many if/else conditions to check, 
// switch statment is easier to write and understand than a chain of if else statments  

function caseInSwitch(val) {
    var answer ="";        // it is an 
    switch (val) {
        case 1 :
            answer = "alpha";
            break;         // it cut the code to run if case get matched, if there is no break it will keep going to the next one automatically
        case 2:
            answer = "beta";
            break;
        default:
            answer = "stuff"
            break;
    }
    return answer          // it is used to return when if we case not matched
}
console.log(caseInSwitch(2));

// Returnig boolean values from the function
function isLess(a,b) {
    if (a<b) {
        return true;
    } else{
        return false;
    }
}
console.log(isLess(10,15))

// insted of the above if statment we write like this for boolean values
function isMore(a,b) {
    return a>b
}
console.log(isMore(10,15))

// Return early pattern for functons?

// Counting cards Project

// anonymous function- it does not have a name, it is assigned to a variable called magic
var magic = function (params) {
    return new Date();
};

// Arrow functions-> we do not need return & curly braces
var magic = () => new Data();  // it is same as above function

// Arrow functions with Parameters
var myConcat = (arr1,arr2) => arr1.concat(arr2)
console.log(myConcat([1,2],[3,4,5])); // we hvae paased 2 arrays as arguments 

//Higher order Arrow functions





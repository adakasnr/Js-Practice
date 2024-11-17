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
console.log("data-",data);

// passing values to the function with Arugments
function addition (a,b) {
    console.log(a+b);
}
addition(10,20)
/* parameters are variables that act as place holder for the values that are input to the funtion when it is called
a&b which are in bracket params are called parameters
10&20 are arguments
we can pass any values as a arguments by calling the function with name then that function will perform the code  
*/

//Globalscope-> scope refers to the visibility of the variables, variables which are defined outside of a function block have global scope
// Localscope-> variables which are declared within a function as well as the function parameters have local scope 

function myLocalScope() {
    var myVar = 5;
    console.log("scope-",myVar); //it will show the result
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
changed = change(10) // here 
console.log("changed",changed);


function railWayTime(time,timeType) {
    let railway=0
    if (timeType==="am") {
        railway = 0+time
    } 
    else if(timeType==="pm"){
        railway = 12+time
    }
    return railway
}
console.log(railWayTime(3,"pm"));


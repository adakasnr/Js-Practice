/*
1. What is JavaScript?
 
javascript is a programming launguage that is used for converting static web pages to interactive and dynamic web page
HTML&CSS are used for displaying static content 
when we click on some button or take action on webpages then it is javascript which is making the website interactive and dynamic
every broser have javascriot engines 
Chrome- V8
firefox- Spider monkey 
safari - Javascript core
internet explorer - Chakra
*/

/*
2.What are data types in javascript? what are primitive data types?

a data type determines the type of values that can be stored in a variable.
Primitive Data Types=>
                     Number
                     Strings
                     Booloean
                     Null
                     Undefined
Primitve Data Types are immutable, which means that thier vlues can not be changed or modified once they are created
Example
let age = 25; 
age = 30;
            In the memory 25 value stored and assigned to age variable, this memory is managed by the javascriot engine which by default comes with the browser, when we assign another value 30 to the age variable then a 30 will be stored as at a new location in the memory, basically we are not modifying the value of first location and converting it from 25 to 30 but we are creating a new value here in case of all primitive data types          

Non-Primitive Data Types=>
                     Objects
                     Array
                     Funtion
                     Date
                     RegExp
*/

/*
3.What is the difference b/w primitive and non primitive data types?

Primitive Data Types=>                          Non-Primitive Data Types=>
1.It can hold only single value                   1.It can hold multiple values and methods
2.These are immutable and their values can not    2.These are mutable and thier values can be 
be changed                                          changed
3.These are simple                                3.These are complex

If we update values in non-primitive data types, in the memory the value will be updated and modified no new memory place will be created for new value 
*/

/*
 4.What are arrays,functons and object?
Array
an array is used to store a collection of values, such as a list of numbers or a list of names,with the help of index we can access any item or element and also we can make changes to the array with array methods

Functions
funtion is a block of code that performs a specific task or retuns a value.A function may or may not return a value 

Object
we can hold multiple values or a combination of values,we can assigin an array to the property of object and even we can assigin the funtion 
*/

/*
5.What is scope in javascript?
Local Scope 
Variables declared inside a function have local scope, which means they can be accessesd within the function not outside
Global Scope
Variables declared outside any function have global scope, which means they can be accessed from anywhere within a program
*/


/*
6.What is the d/f b/w var,let and const in javaScript?
var creates a function-scoped variable
*/

function example() {
    if (true) {
        var count = 10;
        console.log(count);
    }
}
var count = 5
console.log(count);

/*
7.What is loop? what are the type of loops in javascript?
A loop is a programming way to run a set of instructions(code) repeatedly until a certain condition is met
In JS we have 5 types loops, 1.for loop
                             2.while loop
                             3.do-while loop
                             4.for...of loop
                             5.for...in loop
*/

/*
8.what is the d/f b/w for,while and do-while loops?
For loop-it allows to iterate a block of code a specific number of times 
         we must set the increment,we must set the initial value of the number also
         everything in single line(initialisation,condidtion,increment)
While loop-it execute a block of code while a certain condition is true  
Do-While loop-it is almost similar to while loop,except that the block of code is executed at least once, even if the condition is false.           
*/
//for loop
for (let i = 0; i < 5; i++) {
    console.log("for loop",i);
}
//while loop
var j=1
while (j<5) {
    console.log("while loop",j);
    j++
}
//do-while loop
var k = 0;
do {
    console.log("do-while loop",k);
    k++
} while (k>1);

/*
9.What is the d/f b/w for...of and for...in loop?
for...of--It is used to loop through the values of an object like arrays,strings.
          It allows you to access each value directly, without having to use an index.
for...in--It is used to loop through the properties of an object.
          It allows you to iterate over the values associated with those keys.
*/
//for-of loop
let arr = [1,2,3]

for (const newArray of arr) {
    console.log("for...in",newArray);
}

// for-in loop
const person = {
    name :"jhon",
    age : 30,
    role : "developer"
};

for (let key in person) {
    console.log(person[key]);
}

/*
10.What is forEach method? compare it with for...of and for...in loop?
ForEach is a method available on arrays or object that allows you to iterate over each element of the array and perform some action on each element.
*/
// for each method for for...of works- compare this with for...of loop(line:127)
arr.forEach(item => {
    console.log(item);
});
// for each method for for...in works- compare this with for...in loop(line:134) 
Object.keys(person).forEach(value => { 
    //in the place of keys we can put values to get(jhon,30,developer) 
    console.log(value);  // Output: name,age,role
});

/*
11.What is the d/f b/w == and === in JavaScript?
== operator performs type coercion and converts the string to the number and then compare
=== operator does not perform type coercion and only set to true if value and types both are same
*/

/*
12.what are the types of functions in javascript? what are named and anonymous functions?
Types of functions:- 1.Named Function
                     2.Anonymous Function
                     3.Function Expression
                     4.Arrow Function
                     5.IIFE(Imediatly Invoked Function Expression)
                     6.Callback Function
                     7.Higher-Order Function

Named Function-Function with name                     
Anonymous function- Function with no name 
*/

/*
13.What is function expression in JavaScript?
A Function expression is a way to define a function in JavaScript by assigning it to a variable
*/
//Function Expression -In the below code we have assigned anonymous function to a variable, then we use the variable to call the anonymous function. We can also do function expression to the named function

//Function Expression(Anonymous Function)
const add = function (a,b) {
    return a+b;
};
console.log(add(5,6));

//Function Expression(Named Function)- we rarely use named function with function expression 
const sum = function add (a,b) {
    return a+b;
};
console.log(sum(5,6));

/*
14.What are Arrow functions in JavaScript?
Arrow functions, also know as fat arrow functions, are a concise syntax for defining functions in JavaScript. It has default retrun without writing 
*/
//Arrow function syntax
const addition = (x,y) => x+y ; //Anything we metion after the arrow parameter will return 
console.log(addition(10,12));

/*
15.What are Callback Functions?
Callback Function is a function that is passed as an argument to another function 
*/

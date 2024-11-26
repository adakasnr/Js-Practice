"use strict";


//array - array is used to store more no of data at one place 
var familyMembers = ["Sriman", "Siva", "mahesh", "Jai"]
var familyMembersAge = [25, 27, 22, 19]
console.log(familyMembersAge);

//we can store all datatypes in single array
var mother = ["Padma", 46]

// nested array(when one or more array's placed inside one array)
var car = ["hyundai", ["4 Cylinder", ["4stroke", "16Valve"], "power steering", "Manual gearBox"]]


// accessing array data with index(0,1,2,3,4,5)
// modifying array data with index
familyMembersAge[2] = 28
console.log(familyMembersAge);

// accessing nested array(mention the nested array index[first bracket] and after that mention the required index number[second bracket] in that array)
console.log(car[1][1][0]);

// array methods
// Push()- it adds new array or element to the array at the end of that and returns new length of the array
/* familyMembers.push(["Mani"])  
   console.log(familyMembers); */

console.log("push-", familyMembers.push("mani"));// familyMembers.push("mani")-->here we are just pusing an element to array
console.log(familyMembers);
// familyMembers.push(["Mani"])-->we are pushing an array as an element to another array inside of it, then it becomes nested array


// Note- (we can do push method to array and later we console it afterwards) or (we can directly do the push method in the console)

// Pop()- we remove last element from the array
console.log("pop-", familyMembers.pop());
console.log(familyMembers);

// Shift()- it removes first element and returns the removed element
console.log("shift-", familyMembers.shift());
console.log(familyMembers);

// unshift()- it adds new element to the beginning of the array
console.log("unshift-", familyMembers.unshift("Sai"));
console.log(familyMembers);

// accessing nested arrays
var myPlant = [
   {
      type: "flowers",
      list: [
         "rose",
         "tulip",
         "dandeline"
      ]
   },
   {
      type: "trees",
      list: [
         "fir",
         "pine",
         "birch"
      ]
   }
];

console.log(myPlant[1].list[0]); //arrays are accessed with index 

// mutate an array declared with const
const s = [1, 3, 5, 7]
// Array.freeze(s) not working
function editInPlace() {
   "use strict";
   s[0] = 2,
      s[1] = 4,
      s[2] = 6,
      s[3] = 8
}
editInPlace()
console.log(s);

var numbers = [1, 2, 3, 4, 5]
var sum = 0
function addition(numbers) {
   let i = 0
   while (i < numbers.length) {
      sum = sum + numbers[i]
      i++
   }
   return sum
}
console.log(addition(numbers));

// console.log("addition",sum);

// Destructuring Assignment to Assign Variables Arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6] // the space couts as a variable and assigns the index 3 value
console.log(z, x, y); // Output = 1,2,4

let a = 8
let b = 6;
(() => {
   [a, b] = [b, a]
})();

console.log(a);
console.log(b);

// Destructuring Assignment with the Rest Operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function removeFirstTwo(list) {
   const [, , ...arr] = list; // ,,-> these 2 will 
   return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); //Output [3, 4, 5,  6, 7, 8, 9, 10]

// Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
   max: 56.78,
   standerd_deviation: 4.34,
   median: 34.54,
   mode: 23.87,
   min: -0.75,
   average: 35.85
};

const half = (function () {
      //return function half(stats) {
      //return (stats.max+stats.min)/2.0;    //accessing object data 
      return function half({max, min}) {    //accessing object data with destructuring
      return (max + min) / 2.0;  
   };
})();

// console.log(stats);
console.log(half(stats));

//The above processes is commonly used with API calls, When we getting information from Ajax request or an API request

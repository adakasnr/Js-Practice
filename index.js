const personDetails = (...paramters) => {
    console.log(paramters);
}

personDetails(1,2,4,5,{name : "sriman"});

const sriman = [1,2]

const siva = [...sriman, 3]

console.log(siva);

var myName = "Siva";
console.log(myName)

myName = "Sivanagaraju"
var name = myName

    console.log(myName)

let a = 5;
console.log(a);

let b =1+a;
console.log(b);

let hisName = "siva";
let sureName = "adaka";

let fullName = sureName+hisName+"nagaraju";
console.log(fullName);

fullName = sureName+" "+hisName+"nagaraju";
console.log(fullName);

var increment = 0;
increment = increment+1;
console.log(increment);
increment++ //shortest code (for decrement we use -- after the variable)
console.log(increment);

increment--;
console.log(increment);

//concatenating -- we can add different strings with + operator
var ourString = "1st string" + "2nd string"
console.log(ourString);

//concatenating with += opertors-- this reduces the code length
var newString = "we can"
newString += "add strings with shortform"
console.log("newString-",newString);

//appending(addition or attach) variables to string we can concatenate variables also
var concateVaribles = ourString + newString
console.log(concateVaribles);


// finding length of the variable
var newStringLength = newString.length
console.log(newStringLength);
// note- string length will count space too

// bracket notation to find perticlar character based on index of the string 
var firstLetterOfTheString = concateVaribles[23] 
console.log('firstLetterOfTheString-',firstLetterOfTheString);
// index(zero based index) starts from 0(i.e.,0,1,2,3,4,5,6,7,)
// strings are immutable(unable to change) which means we can not alter the string once we created, it does not mean we can not change. for this we assign new string to the variable

//Nth letter of the string 
var lastLetterOfTheString = concateVaribles[concateVaribles.length-1]
console.log(lastLetterOfTheString);

// at()
// it returns the Element based on index(integers -2,-1,0,1,2)
// negative intiger count back from the last array

const array = ["element1", "element2", "element3", "element4"]
// syntax arrayname.at(index)
console.log("at-", array.at(2));

// concat()- it merges two or more arrays and returns new array
const array1 = ["element1:yes", "element2:no"];
const array2 = ["element3", "element4"];

const newArray = array1.concat(array2);

console.log("concat array-", newArray);

// entries()-it is used to find the entries with the index number
const iterator1 = array.entries()
console.log("entries-", iterator1.next().value);
console.log("entries-", iterator1.next().value);

// every()- it tests whether all elements in the array pass the test implemented by the provided the function. it returns boolean 
const arrayWithEven = [2, 4, 6, 8, 12, 14, 16, 18, 20, 22, 24, 26]
const isBelow25 = (currrentValue) => currrentValue < 25;
console.log("arrayMethod every-", arrayWithEven.every(isBelow25));

// shaloow copy -if any changes made to copied object it will reflcets to the original object also
// deep copy- it cancles complete refrence from original,it won't reflect to main object

// filter- it filters the array based on our condition and returns new array
const words = ['spray', 'fine', 'exuberant', 'destruction', 'present'];
const filter = words.filter((word) => word.length > 5)

console.log("arrayMethod filter", filter);

// find- it finds the value based on the condition and returns the value, if no value is found and it returns undefined
const found = arrayWithEven.find((element) => element > 10)
console.log("arrayMeyhod find",found);

// findIndex-

// flat - it crestes new array with all sub array elements concatened into it.
const subArray = [1,2,[4,5]]
console.log("flat",subArray.flat())

// forEach- provided function once for each array element. ?
array1.forEach((element) => console.log(element));

// form()-
// includes()-it gives new array
// indexOf()-it gives index of the element
console.log("indexOf",array.indexOf("element3"));

// join()-it joins the all elements of the array and returns new array in one string or separate 
console.log("join",array.join());
console.log("join",array.join('')); //in one string
console.log("join",array.join('-')); // with separater

// iterator-it defines the no of times that loop turns
// keys
console.log("keys",array.keys());
const iterator = array.keys();
for (const key of iterator) {
    console.log(key);
}


// pop()-it removes the last element of array and returns that removed element 
console.log("pop",array.pop());

// push()-it adds new element to the end of array and retuns length of the array
console.log("push",array.push("element5"));

// map()-it makes changes to the array as per the given condition and return new mapped array
const map1 = arrayWithEven.map((x)=>x/2)
console.log(map1);

// reduse()-
// reverse-it reverse the array, the first element becomes last and the last element becomes frist element 
const reverse = array1.reverse();
console.log("reverse",reverse);

// server()-


// shift()-it removes the first element of the array and returns the removed element, if the array is empty it retuns undefined
console.log("shift",array.shift());

// slice()- it removes the perticular elements based on the index given, returns the sliced elements
console.log("slice",array.slice(1,3));

// some()- it tests whether at least one element passes the test based on the function given
const even = (element) => element % 2 === !0;
console.log("some",arrayWithEven.some(even));

// splice()- it helps us to remove and add element at a time, returns removed element
array1.splice(1,1,'element1.5')
// 1st param defines from where the removing need to be start
// 2nd param defines how many need to be deleted
// 3rd param defines the element to be placed in the place of delete
console.log("splice",array1);

// unshift()- it adds new element at the starting of an array
console.log("unshift",array.unshift("element 0.5"));
console.log(array);

// values(?)-it retuns the values of the array
const iterator2 = array1.values();

for (const value of iterator2) {
    console.log("value",value);
}

// sort()- it sorts the array in assending or decending order
arrayWithEven.sort();
console.log(arrayWithEven);
// at()
// it returns the Element based on index(integers -2,-1,0,1,2)
// negative intiger count back from the last array

const array = ["element1", "element2", "element3", "element4"]
// syntax arrayname.at(index)
console.log("at-", array.at(2));

// concat()- it merges two or more arrays and returns new array
const array1 = ["element1", "element2"];
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
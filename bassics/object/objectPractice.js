// Objects are similar to arrays, in array we access data by using index
// In Object we access data by properties.
// Objects are used to make a,  for example if we take object like car or house or mobile or an item they have some properties like size, colour, weight or any specific properties and also those properties having some values like small, red, 20kg
// Example 
var cars = {
    "name": "hyundai",
    "chassis":"sedan",
    "Model-year":2022,
    "colour":"white",
    "price":950000
} 
/*
Object name:-cars
Properties:-name,chassis,model-year,color,price
values:-hyundai,sedan,2022,white,950000
*/

// accessing object data with dot notation
console.log(cars.colour);
console.log(cars.price);

var myCarPrice = cars.price  // price value is assined to the variable

// accessing object properties with bracket notation 
console.log(cars["Model-year"]);
console.log(cars["chassis"]);

// Updating object properties
cars.price = 975000;
console.log(cars.price); // the value got updated

// adding new propertie to object 
cars.gearbox = "manual";
console.log(cars);       // now cars object have 6 properties(earlier 5 properties) 

// delete properties 
delete cars.gearbox;
console.log(cars);

// Using Objects for Lookups

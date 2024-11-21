// Objects are similar to arrays, in array we access data by using index
// In Object we access data by properties.
// Objects are used to make a,  for example if we take object like car or house or mobile or an item they have some properties like size, colour, weight or any specific properties and also those properties having some values like small, red, 20kg
// Example 
var myCar = {
    "name": "hyundai",
    "chassis": "sedan",
    "Model-year": 2022,
    "colour": "white",
    "price": 950000
}
/*
Object name:-myCar
Properties:-name,chassis,model-year,color,price
values:-hyundai,sedan,2022,white,950000
*/

// accessing object data with dot notation
console.log(myCar.colour);
console.log(myCar.price);

var myCar = myCar.price  // price value is assined to the variable

// accessing object properties with bracket notation 
console.log(myCar["Model-year"]);
console.log(myCar["chassis"]);

// Updating object properties
myCar.price = 975000;
console.log(myCar.price); // the value got updated

// adding new propertie to object 
myCar.gearbox = "manual";
console.log(myCar);       // now myCar object have 6 properties(earlier 5 properties) 

// delete properties 
delete myCar.gearbox;
console.log(myCar);

// Using Objects for Lookups
function lookupPractice(val) {
    var result = ""
    var lookup = {
        name: "John Doe",
        age: 30,
        gender: "Male",
        occupation: "Software Developer",
        country: "USA",
        isEmployed: true,
        hobbies: ["Reading", "Coding", "Hiking"],
        address: {
            street: "123 Main St",
            city: "New York",
            zipCode: "10001"
        },
        phone: "+1-555-1234",
        email: "johndoe@example.com"
    }
    result = lookup[val];
    return result;
};

console.log(lookupPractice("country"));
console.log(lookupPractice("address")); // how to access street which is inside the nested object

// testing objects for properties-we can check if an object has a property with hasown property method

function checkObj(checkProp) {
    if (myCar.hasOwnProperty(checkProp)) {    // not working, why?
        console.log("up:"+checkProp);
        
        return "super";
    } else {
        console.log("down:"+checkProp);
        
        return "Not found";
    }
}

console.log(checkObj("name"));

// accessing nested Objects
const car ={
    steering: "power",
    brakking: "hydralic",
    engine: {
        fuel:"petrol",
        noOfCylinder: 4,
        "enginecooling": "liquid"
    }
} 

console.log(car.engine.fuel);              //
console.log(car.engine["engine cooling"]); //when nested object property have space in b/w

// Prevent Object Mutattion
//    if we have an object or an array, we can still mutate it even if it is declared with const, to prevent mutation we can use object.freeze and array.freeze
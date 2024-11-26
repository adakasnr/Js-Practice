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
        console.log("up:" + checkProp);

        return "super";
    } else {
        console.log("down:" + checkProp);

        return "Not found";
    }
}

console.log(checkObj("name"));

// accessing nested Objects
const car = {
    steering: "power",
    brakking: "hydralic",
    engine: {
        fuel: "petrol",
        noOfCylinder: 4,
        "enginecooling": "liquid"
    }
}

console.log(car.engine.fuel);              //
console.log(car.engine["engine cooling"]); //when nested object property have space in b/w

// Prevent Object Mutattion
//    if we have an object or an array, we can still mutate it even if it is declared with const, to prevent mutation we can use object.freeze and array.freeze

//Destructuring Assignment to Assign Variables from Object -This is a special syntax for neatly assigning values taken from object

var voxel = { x: 3.6, y: 7.4, z: 6.54 }

var x = voxel.x; //x=3.6
var y = voxel.y; //y=7.4
var z = voxel.z; //z=6.54

const {x:a,y:b,z:c} = voxel; // a = 3.6,b=7.4,c=6.54

const AVG_TEMPERATURE = {
    today:77.5,
    tomorrow:79
};

function getTempOfTmrw(avgTemperatures) {
    // "use strict";
    const {tomorrow:tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow
}

console.log(getTempOfTmrw(AVG_TEMPERATURE));

// Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
    today:{min:72, max:83},
    tomorrow:{min:73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    const {tomorrow: {max:maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

// Write Consise Object Literals Declarations Using Simple Fields
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};

console.log(createPerson("Siva", 27, "male"));

// this is below code does the the same work as above code
const creatPersons = (name, age, male) => ({ name, age, male })//JS knows that's going to return object
console.log(creatPersons("Siva", 27, "male"));

// Write Consise Declarative Functions 
// an object can contain function 
const bicycle = {
    gear: 2,
    setGear: function (newGear) {
        this.gear = newGear;       //(this.gear) it allows to access the key from the same object
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

const biCycle = {
    gear: 2,
    setGear(newGear) {            //simpler way to the above code function 
        this.gear = newGear;      //(this.gear) it allows to access the key from the same object
    }
};

biCycle.setGear(3);
console.log(biCycle.gear);

// Class Syntax to Define a Constructor Function 

// This is the older way to create a object(constructor fuunction-we use this to construct the object) 
var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle('Jupiter') //(new)we can instantiate an object using this new keyword
// we are instantiationg the SpaceShuttle object
console.log(zeus.targetPlanet);

// ES6 provides a syntax to create objects using the class keyword 
// The class syntax replaces the constructor function creation 
class SpaceShuttle1 {                  // class created
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle1('Mars');
console.log(zeus.targetPlanet);

// Another example
function makeClass() {
    class Vegetable {            
        constructor(name) {
            this.name = name
        }
    }
    return Vegetable
};

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);

// Use Getters and Setters to Control Access to an Object ?

// import and export

console.log("car",car);
import { superCar } from "object.js"  //not working

var haveCar = superCar
console.log(haveCar);

// export default- this is a fallback export,this is used only when we want to export one thing from a file

// object is one of the javascript datatype, it is used to store various keyed collections(keys(properties) with values)
// syntax to create object
const car ={
    steering: "power",
    brakking: "hydralic",
    engine: {
        fuel:"petrol",
        noOfCylinder: 4
    }
} 
// accessing object properties
// objectName.propertyName then we will get value
car.brakking
console.log(car.brakking);
console.log(car.engine.noOfCylinder);  // accessing nested property

// assigining new value to object 
car.brakking=42
console.log(car);

// calling object methods- method is a predefined function which perform perticular task,they are used to define the behavior of an object  
Object.assign(car)



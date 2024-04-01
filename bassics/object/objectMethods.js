// assign()- it is used to assign one object properties to another object to make new object by combinig both, if there is same property in both the objects then it gives the same property with new value provided in the last object
// Copy the values of all of the enumerable own properties from one or more source objects to a new object. Returns the new object.
let obj1 ={
    property1: "value1",
    property2: "value2"
}
let obj2 ={
    property2: "value2.5",
    property3: "value3"
}
/*
1st param-the target object to copy to.
2nd param— The source object from which to copy properties.
*/
let newObject = Object.assign(obj1,obj2)
console.log("assign",newObject);

// create()- creates new object by using exist object
var person = {
    gender : "male",
}
var me= Object.create(person);
me.name="siva"

console.log(me);

// define properties()- it defines or modefies existing properties of object 
const object1 = {};

Object.defineProperties(object1,{
        property5:{
            value:42,
        }
    }
)
console.log(object1.property5);


// enteries()-it returns an array with keys and values as pair a as required(key-value or value-key) 
for (const [key,value] of Object.entries(obj1)){
    console.log(`${value}:${key}`);
}


// freeze()- it freezes the object, reezing an object prevents extensions and makes existing properties non writable. a frozen object can no longer be changed
Object.freeze(obj1)
obj1.property1 = "value1.5"
console.log("ObjectMethod freeze",obj1); // we can see in console that there will be no changes occured in obj1


// getOwnPropertyNames()- it returns an array of all properties
console.log("ObjectMethod getOwnProperyNames",Object.getOwnPropertyNames(newObject));


// getOwnPropertySymbols(?)

// keys()- returns an array of keys of the object
console.log("ObjectMethod keys",Object.keys(obj1));

// values()- returns an array of values of the object
console.log("ObjectMethod values",Object.values(obj1)); 


// hasOwn()- it checks whether the perticular key(property) is available in the object, if available it gives true otherwise false.Note:it checks only property not value
console.log("hasOwn",Object.hasOwn(obj1,'property1'));
console.log("hasOwn",Object.hasOwn(obj1,'property5'));


// hasOwnProperty()- it works same as hasOwn

// seal()- it seals an object, then we can not make any changes to the object like adding keys or removing keys.This is same as freeze
Object.seal(obj2)

// isSealed()- it checks whether an object is sealed or not 
console.log("isSealed",Object.isSealed(obj1));
console.log("isSealed",Object.isSealed(obj2));
// with the help of this we can check froozen object also

// valuesOf(?)
// to string
/*
* ---------------------------
* |  OBJECTS IN JAVASCRIPT  |
* ---------------------------
*/

/*
* JavaScript is an object-oriented programming language.
* However, it is not a class-based language.
* JavaScript does not contain classes. The objects created in JavaScript are essentially free-form.
* JS objects are not bound to classes.
*/

var myString = "Hello";

/*
* Created a string variable and provided the value in-line. 
*/

var myObject = {};

/*
* Likewise, you can create an object and assign a value to it in-line.
* Simplest object value is empty. That's done by using curly braces. 
*/

console.log(myObject);

/*
* output: Object {  }
*/

/*
* Since it is not class-based, there are no rules about an object. 
* Without a pre-defined structure, you can add/remove stuff at run-time. 
*/

/*
* OBJECTS
* -------
* Objects consist of 'properties' and 'methods'.
* Objects are essentially a collection of 'data' and 'functionalities'.
* Data -> Property, 'Functionality' -> Methods
*
*/

myObject.prop = "Hello";

/*
* Adding a property to the object dynamically (at run-time).
*/

console.log(myObject);

/*
* output: Object { prop: "Hello" }
*/

myObject.prop2 = 123;

/*
* Adding another property to the object dynamically (at run-time).
*/

console.log(myObject);

/*
* output: Object { prop: "Hello", prop2: 123 }
*/

console.log("Number property on the object: " + myObject.prop2);

/*
* output: Number property on the object: 123
*/

/*
*
* OBJECT LITERAL
* --------------
* Rather than creating an empty object, we can have a complete value to the object initialized up-front.
*
*/

var myObject2 = {
  "prop": "Hello",
  "prop2": 123,
  "prop3": true
}

console.log(myObject2);

/*
* output: Object { prop: "Hello", prop2: 123, prop3: true }
*/

/*
*
* 'OBJECT in JAVA' vs. 'OBJECT IN JAVASCRIPT'
* -------------------------------------------
* We don't have a structure in JS.
* In C++/Java, there are accessor limitations (Public/Private/Protected). JS do not have any accessor limitations.
* No option to control if a property of an object is public/private. All properties are accessible by anybody.
* If you access a property which doesn't exist, in case of C++/Java, the compiler checks and throws out an error.
* In case of JS, the error isn't thrown. It just gives the user, 'undefined'.
*
*/

console.log(myObject2.prop4);

/*
* output: undefined
*/

/*
*
* CHARACTERISTICS OF JAVASCRIPT OBJECTS
* -------------------------------------
* Free-form and is not bound to a class.
* Object literal notation is used to create objects - Curly braces with no/one or more properties.
* Object properties can be accessed directly. No accessor limitations.
* New properties can be added to the objects on the go (as and when they are needed).
* Objects can have methods - Concept of functions.
*
*/

var employee = {
  firstName: "Nirmal",
  lastName: "Kanagasabai",
  ID: 112233,
  isPermanent: true
}

/*
*
* DOT NOTATION
* ------------
* Used to access the property of an object.
*
*/

console.log("Printed using Dot Notation");

console.log("Employee Details");
console.log("----------------");

console.log("Name :" + employee.firstName + " "+ employee.lastName);
console.log("ID: " + employee.ID);
console.log("isPermanent: " + employee.isPermanent);

/*
*
* SQUARE BRACKET ([ ]) NOTATION
* -----------------------
* Another way to access the property of an object.
*
*/
console.log("Printed using Square Bracket Notation");

console.log("Employee Details");
console.log("----------------");

console.log("Name :" + employee["firstName"] + employee["lastName"]);
console.log("ID: " + employee["ID"]);
console.log("isPermanent: " + employee["isPermanent"]);

/*
*
* WHEN TO USE DOT & [ ] NOTATIONS?
* -------------------------------------------
* Square Bracket notations are used in scenarios where dot notations don't work.
* Example scenarios:
* Property name is invalid or a reserved keyword
* Property name is a number
* Property name is dynamic
*
* P.S.: It is important to know that the interpreter can optimize DOT notations and not [ ] notations.
* This is because, the engine does not know what property is going to be accessed until the last minute. 
* In case of DOT notation, it is relatively faster because of optimizations.
*
* Dot and [ ] notations can be interchanged.
* 
*/

var myObject4 = {
  "newProp": "new Property",
  "1": "one"
}

/*
* console.log(myObject4.1);
*/

/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:184
*/

console.log(myObject4[1]);

/*
* output: one
*/

/*
*
* In the above example, though we access the property using the regular method (dot notation), an exception is thrown.
* The same can be accessed using [ ] operator.
*
*/

var propertyName = "newProp";

console.log(myObject4.propertyName);

/*
* output: undefined
*/

console.log(myObject4[propertyName]);

/*
* output: new Property
*/

/*
*
* This is because, the interpreter does not find a property with the name, 'propertyName'
* 
*/

/*
*
* OBJECT - REFERENCE TO MEMORY LOCATION
* -------------------------------------
* In most programming languages, an object is a reference to the memory location on the heap. 
* Similar to heap, there is a memory location allocated for the object in thr browser.
* When an object is declared, the memory is allocated and the variables are pointing to that allocated memory.
*
*/

var myObject5 = myObject4;

/*
*
* This means that we can have another object (or, any number of objects) pointing to the same allocated memory location as that of the first object. 
*
*/

/*
*
* NESTED OBJECTS
* --------------
* Similar to Java, "Objects" of a class are instances of another class.
*
*/

var myObject6 = {
  "outerProp1": "outer property one",
  "outerProp2": 2,
  "outerProp3": false,
  "objectProperty": {
    "innerProp1": "inner property one",
    "innerProp2": 22,
    "innerProp3": true
  }
};

console.log(myObject6);

/*
* output: Object { outerProp1: "outer property one", outerProp2: 2, outerProp3: false, objectProperty: {…} }
*/

console.log(myObject6.objectProperty);

/*
* output: Object { innerProp1: "inner property one", innerProp2: 22, innerProp3: true }
*/

console.log(myObject6.objectProperty.innerProp1);

/*
* output: inner property one
*/

console.log(myObject6["objectProperty"]);

/*
* output: Object { innerProp1: "inner property one", innerProp2: 22, innerProp3: true }
*/

console.log(myObject6["objectProperty"].innerProp1);

/*
* output: inner property one
*/

/*
*
* REVISITING === OPERATOR FOR JS OBJECTS
* --------------------------------------
* As it has been mentioned on some of the above examples, two objects can refer to the same allocated memory location.
* Hence, upon comparison, these two objects are considered equal.
*
*/

var myObject7 = {
  "newProperty": "new Property"
}

var myObject8 = myObject7;

if (myObject7 == myObject8) {
  console.log("The two objects are equal");
}

/*
* output: The two objects are equal
*/

if (myObject7 === myObject8) {
  console.log("The two objects are equal");
}

/*
* output: The two objects are equal
*/

/*
*
* REVISITING UNDEFINED vs. NULL FOR JS OBJECTS
* --------------------------------------------
* Not initializing a value vs. Initializing a null value.
* If you refer to property of an object and the property doesn't exist, the value that you get back is, 'undefined'.
*
*/

var person = {
  "firstName": "Nirmal",
  "middleName": null,
  "lastName": "Kanagasabai"
}

console.log(person);

/*
* output: Object { firstName: "Nirmal", middleName: null, lastName: "Kanagasabai" }
*/

console.log(person.age);

/*
* output: undefined
*/

console.log(person.middleName);

/*
* output: null
*/

/*
*
* DELETE OPERATOR
* ---------------
* delete object.property;
* Delete is the keyword. 
*
*/

var student = {
  "name": "Nirmal Kanagasabai",
  "ID": "112233",
  "age": 25
}

console.log(student);

/*
* output: Object { name: "Nirmal Kanagasabai", ID: "112233", age: 25 }
*/

delete student.age;

console.log(student);

/*
* output: Object { name: "Nirmal Kanagasabai", ID: "112233" }
*/

/*
*
* WRAPPER OBJECTS
* ---------------
* Q) Is String a primitive? 
* There is a way to access the length of the String. (Using, string.length)
* If String were to be a primitive, how can we make use of dot notation?
* String, Number, Boolean and Symbol. All these primitives have corresponding objects. 
*
*/

var greeting = "Hello World!";

console.log(greeting);

/*
* output: Hello World!
*/


console.log(greeting.length);

/*
* output: 12
*/


console.log(typeof greeting);

/*
* output: string
*/

/*
*
* The reason it works is, JS has equivalent objects for each of the primitive data types.
* i.e., when the string.length were to be called, the input string is taken and is converted to an object. 
* Once converted, the length property of the object is being called. 
*
* This object is temporary. Once the length is accessed, the object is discarded. So, the typeof outputs, 'string'
*
*/

/*
*
* GLOBAL OBJECTS
* --------------
* Math object (the methods are very useful)
* Date object (the properties are very handy)
* 
*/


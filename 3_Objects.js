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

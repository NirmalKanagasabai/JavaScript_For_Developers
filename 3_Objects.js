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
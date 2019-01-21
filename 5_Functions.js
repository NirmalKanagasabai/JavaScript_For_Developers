/*
* ---------------------------
* |  FUNCTIONS IN JAVASCRIPT  |
* ---------------------------
*/

/*
* 
* Traditionally, the concept is very similar to other programming languages. 
* 
*/

/*
*
* FUNCTION WITHOUT ARGUMENTS
* --------------------------
*
*/

/*
* Function Declaration. 
*/
function sayHello() {
  console.log("Hello");
}

/*
* Function call is made here. 
*/
sayHello();

/*
* output: Hello  
*/

/*
*
* FUNCTION WITH ARGUMENTS
* -----------------------
* No need of defining the type of the arguments. Everything is a 'var'. 
* For the sake of simplicity, JS developers removed it altogether.
*
*/

function add(a, b) {
  var c = a + b;
  console.log("Sum: " + c);
}

add(25, 30);

/*
* function add(var a, var b) causes:
* Exception: SyntaxError: missing formal parameter
* @Scratchpad/1:43
*/

function clock (name, timeOfDay) {
  console.log("Hello " + name + ", " +
             " Time of Day is: " + timeOfDay);
}

clock ("Nirmal", "afternoon");

/*
* output: Hello Nirmal,  Time of Day is: afternoon  
*/

/*
*
* CAN OVERLOADED FUNCTIONS EXIST IN JAVA SCRIPT?
* ----------------------------------------------
* No!!!
*
*/

/*
* Specific Scenario: Not providing enough arguments. 
* Other programming languages are going to throw out compilation errors. 
*/

clock ("Nirmal");

/*
* output: Hello Nirmal,  Time of Day is: undefined  
*/

/*
* Specific Scenario: Providing more arguments than expected. 
* This is just ignored. No errors or exceptions thrown.
* Due to this, "OVERLOADED FUNCTIONS ARE NOT POSSIBLE IN JAVA SCRIPT!!"
*/

clock ("Nirmal", "Afternoon", 55);

/*
* output: Hello Nirmal,  Time of Day is: afternoon  
*/

/*
*
* CAN JS FUNCTIONS RETURN VALUES?
* -------------------------------
* Yes!!!
*
*/

function calculator(number1, number2, number3) {
  return number1 + number2 + number3;
}

console.log("Sum is: " + calculator(3, 4, 5));

/*
* output: Sum is: 12
*/

/*
* If I don't return anything from a function but just assign the function to a variable, the value would be undefined. 
*/

var returnValue = calculator(23, 45, 67);

console.log(returnValue);

/*
* output: 135
*/

function multiplier(a) {
  return;
}

var returnValue = multiplier(23);

console.log(returnValue);

/*
* output: undefined
*/

/*
*
* FUNCTION EXPRESSIONS
* --------------------
* Functions in JS are First-Class Values. 
* Like String is a value and number is a value, the function 'itself' is a value in JS.
*
*/

var a = "Hello";

console.log("FUNCTION EXPRESSIONS...");

var f = function foo() {
  console.log("Hello World!");
}

f();

/*
* output: Hello World!
*/


var sum = function addition (a, b) {
  return a + b;
}

console.log("Sum: " + sum(23, 52));

/*
* output: Sum: 75
*/

console.log("ANONYMOUS FUNCTION EXPRESSIONS...");


/*
* 
* ANONYMOUS FUNCTIONS
* -------------------
* However, it is to be noted that 'foo' and 'addition' isn't used anywhere at all. 
* Hence, it can be ignored once and for all. 
* Notice that in the following examples, it is merely function () and the name of the function is removed.
*
*/

var f = function () {
  console.log("Hello World!");
}

f();

/*
* output: Hello World!
*/

var sum = function (a, b) {
  return a + b;
}

console.log("Sum: " + sum(23, 52));

/*
* output: Sum: 75
*/

/*
* 
* PROBLEMS OF USING ANONYMOUS FUNCTIONS
* -------------------------------------
* The problem with anonymous function expressions is that the variable can be re-assigned at some point and the function cannot be used thereafter.
* i.e., in the above example, if the variable 'sum' is assigned a value of 100, one can no longer pass the arguments to the function. 
*/

/*
* sum = 100;
* console.log("Sum: " + sum(23, 52));
*/

/*
Exception: TypeError: sum is not a function
@Scratchpad/1:219:23
*/

/*
* 
* FUNCTIONS AS ARGUMENTS
* ----------------------
* One function can be passed as an argument to another function. The classic example is console.log(sum(23, 52));
* In here, log() is a function and sum() is another function that is passed as an argument to it. 
*
*/

var executor = function (fn) {
  console.log(fn);
}

executor(f);


/*
* In here, we are merely printing the function. Not executing it. 
* output: function f()
*/

var executor2 = function (fn) {
  fn()
}

executor2(f);

/*
* output: "Hello World!"
*/

var greet = function (name) {
  console.log("Hello " + name);
}

var executor3 = function (functionName, argument) {
  functionName(argument);
}

executor3 (greet, "Nirmal");

/*
* output: "Hello Nirmal"
*/

/*
* 
* FUNCTIONS ON OBJECTS
* --------------------
* Function as an object property. Equivalent of methods.
* Generally, the class has member variables and method definitions. We don't have classes here.
* We have objects which can have properties that can be functions. 
*
*/

var myObject = {
  "testProp": true
};

myObject.myMethod = function () {
  console.log("Function in Object");
};

myObject.myMethod();

/*
* output: Funtion in Object
*/

/*
* 
* DEFAULT FUNCTIONS ARGUMENTS
* ---------------------------
* Arguments argument & This argument
* We get these two out of the box.
* The Arguments value can be used as an array. It doesn't mean it is an array. Just looks like an array. It is an OBJECT.
* 
*/

var sum = function (a, b) {
  return a + b;
}

console.log("Sum: " + sum(23, 30));

var displayArguments = function (a, b) {
  console.log(arguments)
};

console.log(displayArguments(24, 151, 13115, 361,1321));

/*
* output: Arguments { 0: 24, 1: 151, 2: 13115, 3: 361, 4: 1321, … }
*/

var total = 0;

var calculateTotal = function () {
  for (var i=0; i<arguments.length; i++) {
    total = total + arguments[i];
  }
  
  return total;
}

console.log("Total: " + calculateTotal(1,2,3,4,5,6,7,8,9,10));

/*
* output: Total: 55
*/

/*
* 
* FUNCTIONS - SUMMARY
* ---------------------------
* Functions can be written in literal form
* This is a 'value' that can be assigned to a variable
* Can be called by passing in arguments
* FUNCTIONS ARE ALSO OBJECTS!!!
* Flexible argument count (more than what's needed? ignored. Less than what's needed? undefined.)
* No function overloading
* Default arguments
* The ARGUMENTS argument
* 
*/

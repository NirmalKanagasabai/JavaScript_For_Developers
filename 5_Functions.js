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

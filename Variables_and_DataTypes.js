
/*
*
* PRINT STATEMENT
* ---------------
* Console is the global object.
* log() is a method of that object.
* The log() method takes in a string as an argument.
* It prints the output (basically, the input string) on the console.
* Note: Console window prints different data types in different colors. 
* For example, numbers are printed in 'green', the Strings are printed in 'Brownish' and the Booleans are printed in 'Red'.
*/

console.log("Hello World!");

/*
*
* VARIABLE DECLARATION
* --------------------
* Declare the variable and then assign a value to it. 
* Pretty similar to Java. However, there is one big difference.
* If you are to observe the example below, the command does not specify what type the variable is. 
* Be it an 'int' or 'float' or any other data type, the developers do not mention it.
* JavaScript, however, figures out the data type of the variable. 
* No pre-declaration of type required while creating a variable. 
* JS does not require Typed-Variable!
*
*/

var value = 42;

/* or */

var value;
value = 42;

/*
*
* PRIMITIVE TYPES
* ---------------
* Specifies what possible values that can be assigned to the 'var'?
* Number - Used to represent numbers
* String - Used to represent text
* Boolean
* undefined
* null
*
*/

/*
*
* DATA TYPE - NUMBER
* ------------------
* The numbers in JavaScript are different from Java. 
* Basically, every number in JavaScript is a double-precision 64-bit value.
* This means that JS does not have the contept of 'integers'
*
*/

var a = 10;
console.log(a);

var b = 20;
console.log(b);

console.log(a+b);

c=a+b;
console.log(c);

/*
*
* DATA TYPE - STRING
* ------------------
* Strings are sequences of unicode characters (16-bit)
* The String in JavaScript are different from Java. 
* P.S.: There is no character data type in JavaScript.
* Basically, a character is a String of length 1. 
*
*/

var d = "Hello";
console.log(d);

/*
*
* DATA TYPE - BOOLEAN
* ------------------
* Can have values of 'True' / 'False'
* Basically, used for Conditionals.
*
*/

var e = true;
console.log(e);

/*
* 
* LOOSE TYPING
* ------------
* The variable handling is unique. There is no type information associated with a variable.
* i.e., in our previous example, we cannot say if 'a' is a number variable. All that we can say is, 'a' is a variable that currently holds a number.
*/

a = "Example of loose typing";
console.log(a);

/*
*
* While the other languages are going to throw compilation errors because of assigning a String value to 'a', JavaScript happens to handle it efficiently as 'a' is just a variable accoring to it.
* This process is called, 'Loose Typing'.
*
*/

/*
*
* DATA TYPE - UNDEFINED
* ---------------------
* Declaration - When you ask the compiler/interpreter to create a variable and give it a name
* Eg., int foo; var value;
* 
* Definition - When a value is assigned to the variable.
* E.g., foo = 42; value = "Hello";
*
* Declarations of variables happen before definition (although these two can be done together e.g., var value = "Hello").
* Hence, once declared, a type and a value is assigned to the variable. 
* i.e., var value corresponds to a variable of type, 'undefined' and value 'undefined'.
* This type and value holds until a new value is assigned to it. 
*
*/

var value;
console.log(value);

/*
* output: undefined
*/

value = false;
console.log(value);

/*
* output: false
*/

/*
*
* DATA TYPE - NULL
* ---------------------
* NULL, similar to UNDEFINED, has only one value, 'null'.
* 
* Null and Undefined can be a little confusing for beginners. 
* Take a simple example of a form where you need to fill out, 'First Name', 'Middle Name' and 'Last Name'.
* A lot of people don't have middle name. They can either leave it 'empty' or write, 'Not Applicable'.
* If it is left empty, the developers do not know whether the field is overlooked or it is not applicable. 
* For the sake of simplicity and to differentiate between these two categories, 
* if the value hasn't been provided at all, it becomes 'undefined', if 'Not Applicable' is selected, then, the value is 'null'.
*
*/

var a;
console.log(a);

/*
* output: undefined
*/

a = null;
console.log(a);

/*
* output: null
*/

/*
*
* DATA TYPE - SYMBOL
* ------------------
* In addition to the above mentioned data-types, ECMAScript 6 also includes, 'Symbol'.
* Symbol is similar to (enumerations) enums in Java. Bunch of values / constants and the variables can be one of those values. 
* Not a lot of browsers support this (as of now!).
*
*/

/*
*
* DATA TYPES - SUMMARY
* --------------------
* No need to declare variable type. Simply the 'var' keyword and give it a name. 
* The same variable can be assigned values of different types. For instance, undefined -> Number -> String
* No scoping information of the variables. i.e, no private / public for variables.
* Variables and values can be 'interrogated!'
*
*/



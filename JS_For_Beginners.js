
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


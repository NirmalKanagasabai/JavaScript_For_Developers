
/*
*
* PRINT STATEMENT
* ---------------
* Console is the global object.
* log() is a method of that object.
* The log() method takes in a string as an argument.
* It prints the output (basically, the input string) on the console.
* Note: Console window prints different data types in different colors. 
* For example, numbers are printed in 'green' and the Strings are printed in 'black',
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
* Number
* String
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


/*
* ---------------------------
* | OPERATORS IN JAVASCRIPT |
* ---------------------------
*/

/*
* 
* TYPEOF OPERATOR - 'INTERROGATION' OF VARIABLES AND VALUES
* ---------------------------------------------------------
* In case of Java, the variables can contain only one type. Once a variable 'a' is declared as an integer, no matter wherever we use 'a', it is an integer. 
* In case of JavaScript, the variables can be assigned to different types. So, if you are to know the type of a variable, it should be associated with 'that instant'. 
* To do this, we make use of <typeof variable>
*
*/

var aa;
console.log(typeof aa);

/*
* output: undefined
*/

aa = 10;
console.log(typeof aa);

/*
* output: number
*/

aa = "Hello";
console.log(typeof aa);

/*
* output: String
*/

aa = true;
console.log(typeof aa);

/*
* output: boolean
*/


aa = null;
console.log(typeof aa);

/*
* * * * * * * * output: object * * * * * * * * *
*/

/*
*
* EXISTING BUG WHICH CANNOT BE FIXED
* ----------------------------------
* Instead of 'null', the output we get is an 'object'.
* The type of 'null' should ideally be 'null' but in the initial implementation, they chose the typeof 'null' is an 'object'.
*
*/

/*
*
* TYPE COERCION
* -------------
* Where there are operations performed on variables that declared with and assigned to values. 
* The interpreter/compiler needs to do some automatic type conversions for the operations to work.
* This is called, 'Type Coercion'. 
* E.g., Concatenation of String Values. 
*
*/

/* 
* 123 + "4"
*/

/*
* output: 1234 and not 127 because 4 is a string and not a number. 
*/

/*
*
* == OPERATOR
* -----------
* "=" is used for Assignment Operation. Common across many programming languages. 
* "==" is used for comparing two values if they are equal. 
*
*/

var a = 10;
var b = 10;

if (a==b) {
  console.log("Values are equal!");
}

/*
* output: Values are equal!
*/

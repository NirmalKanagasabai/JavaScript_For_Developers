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

if (a == b) {
  console.log("Values are equal!");
}

/*
* output: Values are equal!
*/

var a = 10;
var b = "10";

if (a == b) {
  console.log("Values are equal!");
}

/*
* output: Values are equal!
*/

/*
* 
* PROBLEMS WITH == OPERATOR
* -------------------------
* When == was designed in JS, it was made super friendly. 
* If one of the values can be automatically type-converted, do it and then check if they are equal. 
* Dping so, one of the 10 is converted to a string thereby making 'a' and 'b' equal. 
* Unfortunately, that's now how the developers expect it to work.
* This couldn't be changed as the language has already rolled out and doing so would break many other areas. 
*
*/

/*
* 
* INTRODUCTION OF === OPERATOR
* ----------------------------
* To tackle the above mentioned problem. the "===" operator was introduced in JavaScript.
* Basically, it doesn't do any type conversions and then compare the two values as it is. 
* That way, the "===" operator helps the developers achieve what they want to.
*
*/

var a = 10;
var b = "10";

if (a === b) {
  console.log("Values are equal!");
} else {
  console.log("Values are not equal!");
}

/*
* output: Values are not equal!
*/

/*
* 
* PASSING A VALUE TO AN IF BLOCK
* -------------------------------
* In case of Number, '0' is false. All non-zero numbers (including negatives) are 'true'
* In case of String, 'null' is false. Any non-empty String is true.
* 'Undefined' and 'Null' are false.
* For Boolean, it is apparent. True is true and False is false.
*/

/*
* NUMBER
*/

var a = 0;

if (a) {
  console.log("Value is True!");
} else {
  console.log("Values is False!");
}

/*
* output: Values is Falsel!
*/

var a = 10;

if (a) {
  console.log("Value is True!");
} else {
  console.log("Values is False!");
}

/*
* output: Values is True!
*/

var a = -20;

if (a) {
  console.log("Value is True!");
} else {
  console.log("Values is False!");
}

/*
* output: Values is True!
*/

/*
* STRING
*/

var a = "Hello";

if (a) {
  console.log("Value is True!");
} else {
  console.log("Values is False!");
}

/*
* output: Values is True!
*/

var a = "";

if (a) {
  console.log("Value is True!");
} else {
  console.log("Values is False!");
}

/*
* output: Values is False!
*/

/*
* BOOLEAN
*/

var a = true;

if (a) {
  console.log("Value is True!");
} else {
  console.log("Values is False!");
}

/*
* output: Values is True!
*/

var a = false;

if (a) {
  console.log("Value is True!");
} else {
  console.log("Values is False!");
}

/*
* output: Values is False!
*/

/*
* UNDEFINED
*/

var a;

if (a) {
  console.log("Value is True!");
} else {
  console.log("Values is False!");
}

/*
* output: Values is False!
*/


/*
* NULL
*/

var a = null;

if (a) {
  console.log("Value is True!");
} else {
  console.log("Values is False!");
}

/*
* output: Values is False!
*/

/*
* 
* TYPE COERCION - SUMMARY
* -----------------------
* JavaScript is "flexible" with typing
* Values of all types have an associated boolean value (refer to the section, 'passing values to an if-block')
* Always use "===" for precise checks (without type coercion)
*
*/

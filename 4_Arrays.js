/*
* ---------------------------
* |   ARRAYS IN JAVASCRIPT  |
* ---------------------------
*/

/*
* JS arrays are similar to Java. Index begins at 0.
* Every JS array is basically an object. It just has some special properties to it.
* Basically, when you are creating an array in JavaScript, you are merely creating objects with property names as numbers. 
* Hence, we can only make use of [ ] notation and not dot notation. 
*
*/

var myArray = [100, 200, 300];

console.log(myArray);

/*
* output: Array(3) [ 100, 200, 300 ]
*/

console.log(myArray[0]);

/*
* output: 100
*/

/*
* console.log(myArray.0);
*/

/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:21
*/

console.log(myArray[4]);

/*
* output: undefined (Instead of ArrayIndexOutOfBound Exception being thrown).
*/

/*
* ADDING A NEW ELEMENT
* --------------------
*/
myArray[3] = 400;

console.log(myArray[3]);

/*
* output: 400
*/

/*
* ADDING A NEW ELEMENT OF DIFFERENT DATATYPE
* ------------------------------------------
*/

myArray[4] = "Hello";

console.log(myArray);

/*
* output: Array(5) [ 100, 200, 300, 400, "Hello" ]
0: 100
1: 200
2: 300
3: 400
4: "Hello"
length: 5
*/

/*
* LENGTH OF ARRAY
* ---------------
*/

console.log(myArray.length);

/*
* output: 5
*/



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
*
* LENGTH OF ARRAY
* ---------------
* Length doesn't count how many elements you have in the array.
* It counts the index of the last element (Greatest element) and adds one to it.
*
*/

console.log(myArray.length);

/*
* output: 5
*/

console.log(delete myArray.length);

/*
* output: false
*/

/*
* DELETING THE FIRST ELEMENT FROM THE ARRAY
* -----------------------------------------
*/

delete myArray[0];

console.log(myArray);

/*
* Array(5) [ <1 empty slot>, 200, 300, 400, "Hello" ]
*/

/*
* It is to be noted that the array elements aren't re-arranged. 
*/

/*
* What if there are non-numbered indices to the array?
*/

myArray["foo"] = "non-number";

console.log(myArray);

/*
* output: Array(5) [ <1 empty slot>, 200, 300, 400, "Hello" ]
1: 200
2: 300
3: 400
4: "Hello"
foo: "non-number"
length: 5
*/

/*
* It is to be noted that the item just sits there at the end of the array.
* The length of the array hasn't increased at all.
*/
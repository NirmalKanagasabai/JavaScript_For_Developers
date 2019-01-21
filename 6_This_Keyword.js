/*
* --------------------------------
* |  THIS KEYWORD IN JAVASCRIPT  |
* --------------------------------
*/

/*
*
* How can one have accessor methods (Getters and Setters) in a language like JS?
* 
*/

var person = {
  "firstName": "Nirmal",
  "lastName": "Kanagasabai",
  "getFullName": function() {
    return "Not implemented yet";
  }
};

var fullName = person.getFullName();

console.log(fullName);

/*
* output: Not implemented yet
*/

var employee = {
  "firstName": "Nirmal",
  "lastName": "Kanagasabai",
  "getEmployeeName": function() {
    return employee.firstName + " " + employee.lastName;
  }
};

var employeeName = employee.getEmployeeName();

console.log(employeeName);

/*
* output: Nirmal Kanagasabai
*/

var person2 = employee;

console.log(employee.firstName + " " + employee.lastName);
console.log(employee.getEmployeeName());

person = {};

/*
* Now, the person points to a different object. It doesn't have any property associated with it.
*/

var employee = {
  "firstName": "Nirmal",
  "lastName": "Kanagasabai",
  "getEmployeeName": function() {
    return this.firstName + " " + this.lastName;
  }
};

var person3 = employee;

console.log(person3.getEmployeeName());
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

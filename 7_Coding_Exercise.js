/*
* -----------------------------------
* |  CODING EXERCISE IN JAVASCRIPT  |
* -----------------------------------
*/

var employee = {
  "firstName": "Nirmal",
  "lastName": "Kanagasabai",
  "getEmployeeName": function() {
    return this.firstName + " " + this.lastName;
  },
  
  "address": {
    "street": "123 JS Street",
    "city": "JS",
    "state": "CA"
  },
  "isFromState": function(state) {
    if(this.address.state === state) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(employee.isFromState("CA"));

console.log(employee.isFromState("ABC"));

/*
* Optimized Version
*/

var employee = {
  "firstName": "Nirmal",
  "lastName": "Kanagasabai",
  "getEmployeeName": function() {
    return this.firstName + " " + this.lastName;
  },
  
  "address": {
    "street": "123 JS Street",
    "city": "JS",
    "state": "CA"
  },
  "isFromState": function(state) {
    return this.address.state === state
  }
};

console.log(employee.isFromState("CA"));

console.log(employee.isFromState("ABC"));

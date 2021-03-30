/**
 * Function declarations should use the function keyword
 *  - function myFunction () {}
 * Function expressions can use the function keyword
 *  - const myFunction = function () {}
 * Function expressions using ES6 functions
 *  - const myFunction = () => {}
 *
 * Put the boilerplate code for a function
 * Prep the function
 *  - how many parameters is my function going to accept
 *  - give the function parameters meaningful names
 * Ensure that the function has a return keyword
 *
 * When calling (invoking) the function
 *  - call the function by its name
 *  - use the parentheses
 *  - if applicable pass function values (arguments)
 */

const greeting = (firstName, lastName) => {
  console.log(firstName);
  console.log(lastName);
  return;
};

greeting("John", "Smith");

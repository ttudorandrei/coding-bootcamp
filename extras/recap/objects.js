/**
 * Objects in JS are key value pairs
 *  - const myObject = {}
 * key: anyValue
 *
 * key value pairs are comma separated
 *
 * Rules:
 *  - in the same level no 2 keys can share the same name
 *
 * Access a value from an object
 *  - objectName.propertyName (DOT Notation)
 *  - Bracket Notation to get the value from a variable that has your property name objectName[variableThatHasPropertyName]
 *
 * Functions in an object are called as methods
 */

const user = {
  firstName: "John",
  lastName: "Smith",
  age: 30,
  email: "johnsmith@email.com",
  bestFriend: {
    firstName: "Carol",
    lastName: "Smith",
    age: 25,
    email: "carolsmith@email.com",
    bestFriend: null,
  },
  greeting: function () {
    console.log("HELLO");
    return;
  },
};

console.log(user.lastName);
console.log(user.bestFriend);

console.log(user.bestFriend.firstName);

let propertyName = "email";

console.log(user[propertyName]);

user.greeting();

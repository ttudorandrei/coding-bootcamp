/**
 * What is an array
 *  - It is just a list of anything in JS
 *
 * Syntax of array
 *  - []
 *
 * Multiple items in an array
 *  - use commas to separate multiple items in an array
 *  - [1, 2, 3, 4, 5]
 *
 * Array items have indexes starting from 0
 *
 * Retrieve an item from an array
 *  - nameOfArray[indexValue]
 *
 * Get the length of the array using the 'length' property
 *  - nameOfArray.length
 *
 * Push a new item to an array
 *  - nameOfArray.push(itemToPush)
 *  - returns the length of the array after the push
 *
 * Set/replace the value of an item
 * nameOfArray[indexValue] = yourValue
 */

// const myArray = [1, 2, 3, 4, 5];

// const myArray = ["hello", "world"];

// const myArray = [{ name: "Bob" }, { name: "Alice" }];

// const myArray = [() => {}, () => {}]

// const myArray = [1, "hello", { name: "Bob" }];

const myArray = ["hello", "world"];

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const mathOperations = [add, sub, mul];

mathOperations[1](10, 5);

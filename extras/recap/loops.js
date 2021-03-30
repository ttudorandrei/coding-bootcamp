/**
 * Types of loops
 *  - for
 *  - while
 *  - ES6 array methods map, forEach
 */

const numbers = [1, 2, 3, 4, 5];
const results = [];

// possible index values - 0, 1, 2, 3, 4

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
  results.push(element * 2);
}

for (let i = 0; i < numbers.length; i++) {}

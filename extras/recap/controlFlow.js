/**
 * Control Flows
 *  - if
 *  - if/else
 *  - if/else if/else
 */

// if statement

let number = 5;

if (number < 0) {
  console.log("HELLO");
}

// if else (2 branches)

let x = -100;

if (x > 1000) {
  console.log("YES");
} else {
  console.log("NO");
}

let age = 101;

if (age > 0 && age <= 16) {
  console.log("LEARN HOW TO DRIVE");
} else if (age === 18) {
  console.log("APPLY FOR A LICENSE");
} else if (age > 18 && age <= 100) {
  console.log("GO TO UNIVERSITY");
} else {
  console.log("RETIRE");
}

let y = 0;
while (y < 5) {
  console.log("HELLO");
  y = y + 1;
}

let name = "Bob";

switch (name) {
  case "Alice":
    // do something here
    break;
  case "Carol":
    // do something here
    break;
  case "Bob":
    // do something here
    break;
  default:
    // do something here
    break;
}

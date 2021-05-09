const { add, subtract, multiply, divide } = require("./math");

const Calculator = function (num1, num2) {
  if (!num1 || !num2) {
    throw new Error("You have to provide two numbers");
  }

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("You have to provide two numbers");
  }

  this.num1 = num1;
  this.num2 = num2;
};

Calculator.prototype.add = add;
Calculator.prototype.subtract = subtract;
Calculator.prototype.multiply = multiply;
Calculator.prototype.divide = divide;

module.exports = Calculator;

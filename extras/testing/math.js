const add = function () {
  const { num1, num2 } = this;
  return num1 + num2;
};

const subtract = function () {
  const { num1, num2 } = this;
  return num1 - num2;
};

const multiply = function () {
  const { num1, num2 } = this;
  return num1 * num2;
};

const divide = function () {
  const { num1, num2 } = this;
  return num1 / num2;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

const Calculator = require("./calculator");
const { add, subtract, multiply, divide } = require("./math");
describe("Calculator", () => {
  describe("constructor tests", () => {
    it("should return a new instance of Calculator", () => {
      const actual = new Calculator(3, 5);

      expect(actual).toBeInstanceOf(Calculator);
    });

    it("should return a new instance of Calculator with num1 and num2", () => {
      const expected = {
        num1: 3,
        num2: 5,
      };

      const actual = new Calculator(3, 5);

      expect(actual).toEqual(expected);
    });

    it("should throw an error when only num1 is passed", () => {
      expect(() => {
        new Calculator(2);
      }).toThrow("You have to provide two numbers");
    });

    it("should throw an error when only num2 is passed", () => {
      expect(() => {
        new Calculator(undefined, 2);
      }).toThrow("You have to provide two numbers");
    });

    it("should throw an error when type numbers are not passed", () => {
      expect(() => {
        new Calculator("2", 2);
      }).toThrow("You have to provide two numbers");
    });
  });

  describe("prototype tests", () => {
    it("should contain the add function", () => {
      expect(Calculator.prototype.add).toEqual(add);
    });

    it("should contain the subtract function", () => {
      expect(Calculator.prototype.subtract).toEqual(subtract);
    });

    it("should contain the multiply function", () => {
      expect(Calculator.prototype.multiply).toEqual(multiply);
    });

    it("should contain the divide function", () => {
      expect(Calculator.prototype.divide).toEqual(divide);
    });

    it("should only have the four math methods", () => {
      const actual = Calculator.prototype;

      expect(actual).toEqual(
        expect.objectContaining({
          add: expect.any(Function),
          subtract: expect.any(Function),
          multiply: expect.any(Function),
          divide: expect.any(Function),
        })
      );
    });
  });

  describe("method tests", () => {
    it("should return the sum of 2 numbers", () => {
      const expected = 10;
      const calculator = new Calculator(6, 4);

      const actual = calculator.add();
      expect(actual).toEqual(expected);
    });

    it("should return the difference of 2 numbers", () => {
      const expected = 5;
      const calculator = new Calculator(12, 7);

      const actual = calculator.subtract();
      expect(actual).toEqual(expected);
    });

    it("should return the product of 2 numbers", () => {
      const expected = 50;
      const calculator = new Calculator(25, 2);

      const actual = calculator.multiply();
      expect(actual).toEqual(expected);
    });

    it("should return the quotient of 2 numbers", () => {
      const expected = 5;
      const calculator = new Calculator(100, 20);

      const actual = calculator.divide();
      expect(actual).toEqual(expected);
    });
  });
});

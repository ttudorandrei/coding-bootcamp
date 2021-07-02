const app = require("./index");

jest.mock("moment", () => {
  return () => jest.requireActual("moment")("2020-11-20T22:30:15.000Z");
});

describe("App tests", () => {
  test("should console log each todo", () => {
    const mockTodos = [
      {
        id: 1,
        message: "Take out the bins",
      },
      {
        id: 2,
        message: "Feed the cat",
      },
    ];

    const consoleSpy = jest.spyOn(console, "log");

    app(mockTodos);

    expect(consoleSpy).toHaveBeenCalledWith(
      "1. Take out the bins on Fri, 20th November, 2020 at 22:30:15"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "2. Feed the cat on Fri, 20th November, 2020 at 22:30:15"
    );

    expect(consoleSpy).toHaveBeenCalledTimes(2);
  });
});

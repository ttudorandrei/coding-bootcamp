const { transformTodos, formatTodos } = require("./util");

describe("Util tests", () => {
  test("should return an array with each object containing date and time key", () => {
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

    const actual = transformTodos(mockTodos);

    actual.forEach((todo, index) => {
      expect(todo).toEqual(
        expect.objectContaining({
          id: mockTodos[index].id,
          message: mockTodos[index].message,
          date: expect.any(String),
          time: expect.any(String),
        })
      );
    });
  });

  test("should return an array of formatted strings", () => {
    const mockTodos = [
      {
        id: 1,
        message: "Take out the bins",
        date: "Mon, 12th June, 2020",
        time: "21:00:00",
      },
      {
        id: 2,
        message: "Feed the cat",
        date: "Mon, 20th June, 2020",
        time: "22:00:00",
      },
    ];

    const expected = [
      "1. Take out the bins on Mon, 12th June, 2020 at 21:00:00",
      "2. Feed the cat on Mon, 20th June, 2020 at 22:00:00",
    ];

    const actual = formatTodos(mockTodos);

    expect(actual).toEqual(expected);
  });
});

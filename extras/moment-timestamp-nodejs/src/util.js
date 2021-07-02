const moment = require("moment");

const transformTodos = (todos) => {
  return todos.map((todo) => {
    const now = moment();
    const date = now.format("ddd, Do MMMM, YYYY");
    const time = now.format("HH:mm:ss");

    return {
      ...todo,
      date,
      time,
    };
  });
};

const formatTodos = (todos) =>
  todos.map(
    (todo) => `${todo.id}. ${todo.message} on ${todo.date} at ${todo.time}`
  );

module.exports = { transformTodos, formatTodos };

const { transformTodos, formatTodos } = require("./util");

const app = (todos) => {
  const transformedTodos = transformTodos(todos);

  const formattedTodos = formatTodos(transformedTodos);

  formattedTodos.forEach((todo) => {
    console.log(todo);
  });
};

module.exports = app;

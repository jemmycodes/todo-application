import React from "react";

const TodoContext = React.createContext({
  todos: [],
  removeTodo: (id) => {},
  addTodo: (todo) => {},
});

export default TodoContext;

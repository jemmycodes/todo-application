import React from "react";

const TodoContext = React.createContext({
  todos: [],
  done: [],
  deleteDone: () => {},
  removeTodo: (id) => {},
  addTodo: (todo) => {},
  deleteAll: () => {},
  toggleTodo: (id) => {},
});

export default TodoContext;

import { useReducer } from "react";
import TodoContext from "./todo-context";
import { v4 as uuid } from "uuid";

const APP_ACTIONS = {
  add: "ADD",
  delete: "DELETE",
};

const defaultState = {
  todo: [],
};

const todoReducer = (state, action) => {
  if (action.type === APP_ACTIONS.add) {
    state.todo = [...state.todo, action.payload];
    return {
      todo: state.todo,
    };
  }

  if (action.type === APP_ACTIONS.delete) {
    const deleteItems = state.todo.filter((todo) => todo.id !== action.payload);
    return {
      todo: deleteItems,
    };
  }
  return defaultState;
};

function TodoProvider(props) {
  const id = uuid().slice(0, 4);

  const [todoState, dispatchTodo] = useReducer(todoReducer, defaultState);

  const addTodoHandler = (todo) => {
    dispatchTodo({
      type: APP_ACTIONS.add,
      payload: { todo: todo, id: id },
    });
  };

  const removeTodoHandler = (id) => {
    dispatchTodo({
      type: APP_ACTIONS.delete,
      payload: id,
    });
  };

  const todoContext = {
    todos: todoState.todo,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

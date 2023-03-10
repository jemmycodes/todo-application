import { useReducer } from "react";
import TodoContext from "./todo-context";
import { v4 as uuid } from "uuid";

const APP_ACTIONS = {
  add: "ADD",
  delete: "DELETE",
  deleteAll: "DELETE_ALL",
  toggle: "TOGGLE",
  deleteDone: "DELETE_DONE",
};

const defaultState = {
  todo: [],
  done: [],
  notDone: [],
};

const todoReducer = (state, action) => {
  if (action.type === APP_ACTIONS.add) {
    state.todo = [...state.todo, action.payload];
    return {
      todo: state.todo,
      done: state.todo.filter((aTodo) => aTodo.isChecked === true),
      notDone: state.todo,
    };
  }

  if (action.type === APP_ACTIONS.delete) {
    const deleteItems = state.todo.filter((todo) => todo.id !== action.payload);
    return {
      todo: deleteItems,
      done: state.todo.filter((aTodo) => aTodo.isChecked === true),
      notDone: deleteItems,
    };
  }

  if (action.type === APP_ACTIONS.deleteAll) {
    return {
      todo: [],
      done: [],
      notDone: [],
    };
  }

  if (action.type === APP_ACTIONS.toggle) {
    const checked = state.todo.find((aTodo) => action.payload === aTodo.id);
    checked.isChecked = !checked.isChecked;
    return {
      todo: state.todo,
      done: state.todo.filter((aTodo) => aTodo.isChecked === true),
      notDone: state.todo.filter((aTodo) => aTodo.isChecked !== true),
    };
  }

  if (action.type === APP_ACTIONS.deleteDone) {
    return {
      todo: state.todo.filter((aTodo) => aTodo.isChecked !== true),
      done: [],
      notDone: state.todo.filter((aTodo) => aTodo.isChecked !== true),
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
      payload: { todo: todo, id: id, isChecked: false },
    });
  };

  const removeTodoHandler = (id) => {
    dispatchTodo({
      type: APP_ACTIONS.delete,
      payload: id,
    });
  };

  const deleteAllTasks = () => {
    dispatchTodo({ type: APP_ACTIONS.deleteAll });
  };

  const toggleTodo = (id) => {
    dispatchTodo({ type: APP_ACTIONS.toggle, payload: id });
  };

  const deleteDoneHandler = () => {
    dispatchTodo({ type: APP_ACTIONS.deleteDone });
  };

  const todoContext = {
    todos: todoState.todo,
    done: todoState.done,
    notDone: todoState.notDone,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    deleteAll: deleteAllTasks,
    deleteDone: deleteDoneHandler,
    toggleTodo: toggleTodo,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

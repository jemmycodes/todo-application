import lists from "../todo-data";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import TodoContext from "../store/todo-context";

function All() {
  const todoCtx = useContext(TodoContext);

  const todo = todoCtx.todos.map((todo) => (
    <li
      className="border w-full flex justify-between py-3 px-4 list-none capitalize"
      key={todo.id}
      id={todo.id}
    >
      <p>{todo.todo}</p>
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <AiFillDelete
          className="text-RedBtns text-xl cursor-pointer"
          onClick={() => todoCtx.removeTodo(todo.id)}
        />
      </div>
    </li>
  ));

  return (
    <section>
      <ul className="flex flex-col gap-4">{todo}</ul>
    </section>
  );
}

export default All;

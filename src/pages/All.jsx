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
      <p
        className={`${
          todo.isChecked === true ? "text-RedBtns line-through" : ""
        }`}
      >
        {todo.todo}
      </p>
      <div className="flex items-center gap-2">
        <input type="checkbox" onChange={() => todoCtx.toggleTodo(todo.id)} />
        <AiFillDelete
          className="text-RedBtns text-xl cursor-pointer"
          onClick={() => todoCtx.removeTodo(todo.id)}
        />
      </div>
    </li>
  ));

  const todoLength = todoCtx.todos.length === 0;

  return (
    <section>
      {!todoLength && <ul className="flex flex-col gap-4">{todo}</ul>}
      {todoLength && (
        <p className="text-center font-bold">
          You have no todos yet. Try adding a Todo!😉
        </p>
      )}
    </section>
  );
}

export default All;

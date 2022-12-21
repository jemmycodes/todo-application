import { useContext } from "react";
import TodoContext from "../store/todo-context";
import { RiTodoLine } from "react-icons/ri";

function Todo() {
  const todoCtx = useContext(TodoContext);

  const todo = todoCtx.notDone.map((todo) => (
    <li
      className="border w-full flex gap-2 justify-between py-3 px-4 list-none capitalize"
      key={todo.id}
      id={todo.id}
    >
      <p>{todo.todo}</p>
      <div className="flex items-center gap-2">
        <p>Pending...</p>
        <RiTodoLine className="text-yellow-600 text-xl" />
      </div>
    </li>
  ));

  const todoLength = todoCtx.notDone.length === 0;

  return (
    <section>
      {!todoLength && <ul className="flex flex-col gap-4">{todo}</ul>}
      {todoLength && (
        <p className="text-center font-bold">
          You have no pending Todo yet! Try creating one😎
        </p>
      )}
    </section>
  );
}

export default Todo;

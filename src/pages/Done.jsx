import { useContext } from "react";
import TodoContext from "../store/todo-context";
import { IoMdDoneAll } from "react-icons/io";

function Done() {
  const todoCtx = useContext(TodoContext);
  const todo = todoCtx.done.map((todo) => (
    <li
      className="border w-full flex justify-between py-3 px-4 list-none capitalize"
      key={todo.id}
      id={todo.id}
    >
      <p>{todo.todo}</p>
      <div className="flex items-center gap-2">
        <IoMdDoneAll className="text-green-600 text-xl" />
      </div>
    </li>
  ));
  const todoLength = todoCtx.done.length === 0;
  return (
    <section>
      {!todoLength && <ul className="flex flex-col gap-4">{todo}</ul>}
      {todoLength && (
        <p className="text-center font-bold">
          You haven't acheieved any task yet! Try working harder💪🏽
        </p>
      )}
    </section>
  );
}

export default Done;

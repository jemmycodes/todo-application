import { useContext } from "react";
import TodoContext from "../../store/todo-context";

function BottomCTA() {
  const todoCtx = useContext(TodoContext);
  return (
    <section className="flex flex-col md:flex-row gap-8">
      <button>Delete done tasks</button>
      <button onClick={() => todoCtx.deleteAll()}>Delete all tasks</button>
    </section>
  );
}

export default BottomCTA;

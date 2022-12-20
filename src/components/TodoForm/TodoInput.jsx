import { useContext, useRef } from "react";
import { RiBook2Fill } from "react-icons/ri";
import TodoContext from "../../store/todo-context";
import Buttons from "../Ui/Buttons";

function TodoInput() {
  const todoCtx = useContext(TodoContext);

  const todoInput = useRef();

  const submitFormHandler = (e) => {
    if (todoInput.current.value.length === 0) {
      return;
    }
    e.preventDefault();
    todoCtx.addTodo(todoInput.current.value);
    todoInput.current.value = " ";
  };

  return (
    <section>
      <h1>TodoInput</h1>

      <div className="border px-10 py-4">
        <form onSubmit={submitFormHandler} className="flex flex-col space-y-4">
          <div className="flex">
            <div className="bg-BlueBtns px-3 flex items-center rounded-l-md">
              <RiBook2Fill className="text-3xl text-white" />
            </div>
            <input
              type="text"
              placeholder="New Task"
              ref={todoInput}
              required
            />
          </div>

          <Buttons>Add new task</Buttons>
        </form>
      </div>
    </section>
  );
}

export default TodoInput;

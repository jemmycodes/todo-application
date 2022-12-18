import { RiBook2Fill } from "react-icons/ri";
import Input from "./Input";
import Buttons from "../Ui/Buttons";

function TodoInput() {
  return (
    <section>
      <h1>TodoInput</h1>
      <div className="border px-10 py-4">
        <form className="flex flex-col space-y-4">
          <div className="flex">
            <div className="bg-BlueBtns px-3 flex items-center rounded-l-md">
              <RiBook2Fill className="text-3xl text-white" />
            </div>
            <Input />
          </div>
          <Buttons>Add new task</Buttons>
        </form>
      </div>
    </section>
  );
}

export default TodoInput;

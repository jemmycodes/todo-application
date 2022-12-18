import lists from "../todo-data";
import { AiFillDelete } from "react-icons/ai";

function All() {
  const todo = lists.map((list) => (
    <li className="border w-full flex justify-between py-3 px-4 list-none capitalize">
      <p>{list.title}</p>
      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <AiFillDelete className="text-RedBtns text-xl cursor-pointer" />
      </div>
    </li>
  ));

  return (
    <section className="px-8">
      <ul className="flex flex-col gap-4">{todo}</ul>
    </section>
  );
}

export default All;

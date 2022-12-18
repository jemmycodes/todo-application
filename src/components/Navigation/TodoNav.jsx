import { Link as NavLinks } from "react-router-dom";
import Buttons from "../Ui/Buttons";

function TodoNav() {
  return (
    <nav className="flex flex-col w-full">
      <h1>TodoList</h1>
      <ul className="flex flex-col  md:flex-row gap-4">
        <li>
          <NavLinks to="/">
            <Buttons>All</Buttons>
          </NavLinks>
        </li>
        <li>
          <NavLinks to="/done">
            <Buttons>Done</Buttons>
          </NavLinks>
        </li>
        <li>
          <NavLinks to="/todo">
            <Buttons>Todo</Buttons>
          </NavLinks>
        </li>
      </ul>
    </nav>
  );
}

export default TodoNav;

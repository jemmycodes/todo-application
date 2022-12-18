import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./pages/All";
import Done from "./pages/Done";
import Todo from "./pages/Todo";
import TodoNav from "./components/Navigation/TodoNav";
import TodoInput from "./components/TodoForm/TodoInput";
import BottomCTA from "./components/BottomCTA/BottomCTA";

function App() {
  return (
    <BrowserRouter>
      <section>
        <TodoInput />
      </section>
      <section>
        <TodoNav />
      </section>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/done" element={<Done />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      <BottomCTA />
    </BrowserRouter>
  );
}

export default App;

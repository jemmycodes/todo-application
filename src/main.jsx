import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import TodoProvider from "./store/TodoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);

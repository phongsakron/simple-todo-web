import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoContext, TodoProvider } from "./context/TodoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);

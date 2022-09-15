import { useContext, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TextInput from "./components/TextInput/TextInput";
import TodoItem from "./components/ToDoItem/TodoItem";
import autoAnimate from "@formkit/auto-animate";
import icon from "./assets/icon.png";
import { Todo } from "./types/Todo";
import { TodoContext } from "./context/TodoContext";
import { version } from "./const/app.json";
function App() {
  const { todos, addTodo, deleteTodo, editTodo, toggleTodo } =
    useContext(TodoContext);

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const sortCompleteTodo = todos.sort((a, b) => {
    if (a.isComplete === b.isComplete) {
      return 0;
    } else if (a.isComplete) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div>
      {/* header */}
      <div className="flex flex-row justify-between items-center gap-2 p-4">
        <img src={icon} alt="icon" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">
          Simple ToDo <span className="text-gray-400">({version})</span>
        </h1>
      </div>

      <div className="p-2 sticky bg-white top-0">
        <TextInput onComplete={addTodo} />
      </div>
      <div ref={parent} className="flex flex-col gap-2 p-2">
        {sortCompleteTodo.map((todo, index) => (
          <TodoItem
            key={todo.lastUpdate}
            text={todo.text}
            isComplete={todo.isComplete}
            onToggle={() => toggleTodo(index)}
            onDelete={() => deleteTodo(index)}
            onEdit={(text) => editTodo(index, text)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

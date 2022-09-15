import { PropsWithChildren } from "react";
// create context for todo
import { createContext, useState } from "react";
import { Todo } from "../types/Todo";

export interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
  editTodo: (index: number, text: string) => void;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
});

const loadTodo = () => {
  const todoList = localStorage.getItem("todos");
  if (todoList) {
    console.log(JSON.parse(todoList))
    return JSON.parse(todoList);
  } else {
    return [];
  }
};

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<Todo[]>(loadTodo);
  const addTodo = (text: string) => {
    const newTodoList = [
      { text, isComplete: false, lastUpdate: new Date().toISOString() },
      ...todos,
    ];
    setTodos(newTodoList);
    saveTodo(newTodoList);
  };

  const toggleTodo = (index: number) => {
    const newTodoList = [...todos];
    newTodoList[index].isComplete = !newTodoList[index].isComplete;
    newTodoList[index].lastUpdate = new Date().toISOString();
    setTodos(newTodoList);
    saveTodo(newTodoList);
  };

  const deleteTodo = (index: number) => {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
    saveTodo(newTodoList);
  };

  const editTodo = (index: number, text: string) => {
    const newTodoList = [...todos];
    newTodoList[index].text = text;
    newTodoList[index].lastUpdate = new Date().toISOString();
    setTodos(newTodoList);
    saveTodo(newTodoList);
  };

  const saveTodo = (newTodoList: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  };

 

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

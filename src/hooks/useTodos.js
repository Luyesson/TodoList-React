import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function useTodos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", [
    {
      id: new Date().getTime() + parseInt(Math.random() * 10000000),
      todo: "揍吉伊",
      done: false,
      details: "揍吉伊可以获得5000金币",
    },
    {
      id: new Date().getTime() + parseInt(Math.random() * 10000000),
      todo: "揍小八",
      done: false,
      details: "揍小八可以获得10000金币",
    },
    {
      id: new Date().getTime() + parseInt(Math.random() * 10000000),
      todo: "做早操",
      done: false,
      details: "做早操可以获得20000金币",
    },
  ]);
  function handleAddTodo() {
    if (todo.trim() === "") {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      todo: todo,
      done: false,
      details: "",
    };
    const newTodos = [...todos, newTodo];
    const sortedTodos = newTodos.sort((a, b) => a.done - b.done);
    setTodos(sortedTodos);
    setTodo("");
  }
  return { todo, todos, setTodo, setTodos, handleAddTodo };
}

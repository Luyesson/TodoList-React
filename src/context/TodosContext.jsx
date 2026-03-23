import { createContext, useContext } from "react";
import useTodos from "@/hooks/useTodos";

const TodosContext = createContext(null);

export function TodosProvider({ children }) {
  const value = useTodos();
  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export function useTodosContext() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodosContext must be used within TodosProvider");
  }
  return context;
}

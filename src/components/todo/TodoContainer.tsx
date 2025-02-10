"use client";

import { useEffect } from "react";
import TodoList from "./list/TodoList";
import AddForm from "./add/AddForm";
import { useTodoStore } from "@/store/useTodoStore";

const TodoContainer = () => {
  const { todos, fetchTodos } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  const pendingTodos = todos.filter((todo) => !todo.isCompleted);
  const doneTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <>
      <AddForm />
      <div className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[24px] overflow-hidden">
        <TodoList status="todo" todos={pendingTodos} />
        <TodoList status="done" todos={doneTodos} />
      </div>
    </>
  );
};

export default TodoContainer;
